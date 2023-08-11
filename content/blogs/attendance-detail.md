# 출석부 개발

admin 개발은 이제 능숙하게 할 수 있고 이번에 출석부 admin 페이지를 새로 만들면서\
어떻게 코드를 작성했는지 정리해 두면 후배 개발자나 평가자들에게 도움이 될 것이라 생각한다.\
많은 페이지 중 출석부 상세 페이지 코드에 대해서 다루겠다.\
여러 출석부를 생성할 수 있고 출석부 리스트 페이지에서 각 아이템 링크로 접근할 수 있는 페이지다.\
모든 코드는 제일 아래쪽에서 볼 수 있다.\
위에서부터 아래로 내려가며 하나씩 설명해보겠다.

## Hooks 순서

### Global state

AdminAttendanceDetail 컴포넌트 내부의 첫 번째 줄을 보면\
제일 먼저 어쩔 수 없이 넣어야 하는 hook을 두었다.

- react router 5의 history를 쓰기 위해서 useHistory()
- 다국어 지원을 위한 react intl의 intl을 쓰기 위해서 useIntl()
- api state를 관리해주는 tanstack qeury(react query)의 queryClient를 쓰기 위해서 useQueryClient()
- url의 query parameter를 가져오기 위해서 useParams()

```tsx
const history = useHistory();
const intl = useIntl();
const queryClient = useQueryClient();
const { attendanceBookId } = useParams<{ attendanceBookId: string }>();
```

마치 import 해오듯이 컴포넌트에서 필요한 variable을 가져오는 코드는 제일 위쪽에 두는 게 좋아보인다.\
다음으로 redux나 recoil 등의 global state를 두지만 여기서는 global state를 활용하지 않는다.\
사실 react query가 등장한 이후로 global state를 사용할일이 별로 없어진듯하다.\
만약 넣는다면 [아래와 같은 코드](https://redux-toolkit.js.org/tutorials/typescript#use-typed-hooks-in-components)를 넣었을 테다.

```tsx
const count = useAppSelector((state) => state.counter.value);
```

### Local State

다음으로는 local state가 온다.

동료 개발자가 구현한 form 모달을 열고 닫을 수 있는 open state를 뒀다.

```tsx
const [isAttendanceBookEditModalOpened, setIsAttendanceBookEditModalOpened] =
  React.useState(false);
```

출석부 상세 페이지에는 출석부 구성원 리스트를 보여주는 테이블이 있다.\
페이지 당 10개의 item row를 보여주고 필터링이 가능한데\
10개의 row는 필터링된 구성원 리스트 TODO:

```tsx
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useHistory, useParams } from 'react-router-dom';
import { useDebounce, useSearchParam } from 'react-use';
import { AttendanceStatus } from '@elice/openapi-client-attendance';
import { AttendanceGetSortByEnum } from '@elice/openapi-client-attendance';
import {
  ArrowBackIos as IconArrowBackIos,
  ArrowForwardIos as IconArrowForwardIos,
  DateRangeRounded as IconDateRange,
  Delete as IconDelete,
  Edit as IconEdit,
  FileDownload as IconFileDownload,
  Person as IconPerson,
  Search as IconSearch,
} from '@mui/icons-material';
import {
  Breadcrumbs,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as Sentry from '@sentry/react';
import { useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { enqueueSnackbar } from 'notistack';
import queryString from 'query-string';

import { eliceAttendanceAttendanceBookApi } from 'src/api/clientAttendance';
import { ADMIN_ATTENDANCE_QUERY_KEYS } from '../ducks/hooks/constants';
import useAttendance from '../ducks/hooks/useAttendance';
import useAttendanceBook from '../ducks/hooks/useAttendanceBook';
import useAttendanceBookDownload from '../ducks/hooks/useAttendanceBookDownload';
import useAttendanceCount from '../ducks/hooks/useAttendanceCount';
import AttendanceBookFormModal from '../modals/AttendanceBookFormModal';
import ConfirmDialog from '../shared/ConfirmDialog';
import FilterToggleButtonGroup from '../shared/FilterToggleButtonGroup';
import AdminAttendanceDetailTable from './AdminAttendanceDetailTable';
import AttendanceInfo from './AttendanceInfo';

import type { AttendanceGetRequest } from '@elice/openapi-client-attendance';
import type { DateValidationError } from '@mui/x-date-pickers';
import type { PickerChangeHandlerContext } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types';
import type { Dayjs } from 'dayjs';

type ConfirmAttendanceDialog = {
  type: 'delete';
};

export type Order = 'asc' | 'desc';

export enum OrderBy {
  CheckIn = 'check_in',
  CheckOut = 'check_out',
  StaySeconds = 'stay_seconds',
  FaceDetectedSeconds = 'face_detection_seconds',
  FaceUndetectedSeconds = 'face_unrecognized_seconds',
}

const ROW_COUNT_PER_PAGE = 10;

const getSortBy = (orderBy: OrderBy | null, order: Order) => {
  switch (orderBy) {
    case OrderBy.CheckIn:
      if (order === 'asc') {
        return AttendanceGetSortByEnum.CheckInAsc;
      }
      return AttendanceGetSortByEnum.CheckInDesc;

    case OrderBy.CheckOut:
      if (order === 'asc') {
        return AttendanceGetSortByEnum.CheckOutAsc;
      }
      return AttendanceGetSortByEnum.CheckOutDesc;

    case OrderBy.FaceDetectedSeconds:
      if (order === 'asc') {
        return AttendanceGetSortByEnum.FaceDetectedSecondsAsc;
      }
      return AttendanceGetSortByEnum.FaceDetectedSecondsDesc;

    case OrderBy.FaceUndetectedSeconds:
      if (order === 'asc') {
        return AttendanceGetSortByEnum.FaceUndetectedSecondsAsc;
      }
      return AttendanceGetSortByEnum.FaceUndetectedSecondsDesc;

    case OrderBy.StaySeconds:
      if (order === 'asc') {
        return AttendanceGetSortByEnum.StaySecondsAsc;
      }
      return AttendanceGetSortByEnum.StaySecondsDesc;

    default:
      return undefined;
  }
};

const AdminAttendanceDetail = () => {
  const history = useHistory();
  const intl = useIntl();
  const queryClient = useQueryClient();
  const { attendanceBookId } = useParams<{ attendanceBookId: string }>();

  const [isAttendanceBookEditModalOpened, setIsAttendanceBookEditModalOpened] =
    React.useState(false);

  const [searchQuery, setSearchQuery] = React.useState(
    useSearchParam('search') ?? ''
  );
  const [debouncedSearchQuery, setDebouncedSearchQuery] = React.useState(
    useSearchParam('search') ?? ''
  );
  const [isSearchQueryChanged, setIsSearchQueryChanged] = React.useState(false);
  const [page, setPage] = React.useState(Number(useSearchParam('page')) || 1);
  const [date, setDate] = React.useState<Dayjs | null>(
    dayjs(useSearchParam('date') ?? undefined)
  );
  const [attendanceStatus, setAttendanceStatus] =
    React.useState<AttendanceStatus | null>(null);

  // Table order state
  const [orderBy, setOrderBy] = React.useState<OrderBy | null>(null);
  const [order, setOrder] = React.useState<Order>('asc');

  const [confirmDialog, setConfirmDialog] =
    React.useState<ConfirmAttendanceDialog | null>(null);

  // Put undefined if want to clear the query.
  const changeQueries = (queries: {
    [key: string]: string | number | undefined;
  }) => {
    history.replace({
      ...history.location,
      search: queryString.stringify({
        ...queryString.parse(history.location.search),
        ...queries,
      }),
    });
  };

  useDebounce(
    () => {
      // Prevent changes at initialization
      if (isSearchQueryChanged) {
        setDebouncedSearchQuery(searchQuery);
        setPage(1);

        if (searchQuery.length === 0) {
          changeQueries({ search: undefined, page: 1 });
        } else {
          changeQueries({ search: searchQuery, page: 1 });
        }
      }
    },
    250,
    [searchQuery]
  );

  const { download, isLoading: downloadLoading } = useAttendanceBookDownload({
    attendanceBookId,
    beginDate: date,
    endDate: date,
  });

  const { data: attendanceBookData } = useAttendanceBook(attendanceBookId);

  // Common params
  const attendanceParams: Omit<AttendanceGetRequest, 'skip' | 'count'> = {
    filterSearch: debouncedSearchQuery
      ? `%${debouncedSearchQuery}%`
      : undefined,
    filterAttendanceBookId: attendanceBookId,
    filterDateGe: dayjs(date).format('YYYY-MM-DD'),
    filterDateLe: dayjs(date).format('YYYY-MM-DD'),
  };

  // Table row data
  const { data: attendanceData, isLoading: attendanceLoading } = useAttendance({
    ...attendanceParams,
    skip: (page - 1) * ROW_COUNT_PER_PAGE,
    count: ROW_COUNT_PER_PAGE,
    filterStatus: attendanceStatus ?? undefined,
    sortBy: getSortBy(orderBy, order),
  });

  // Count datas
  const { data: attendanceAllCountData } = useAttendanceCount(attendanceParams);
  const { data: attendanceAttendCompletedCountData } = useAttendanceCount({
    ...attendanceParams,
    filterStatus: AttendanceStatus.AttendCompleted,
  });
  const { data: attendanceAbsenceCountData } = useAttendanceCount({
    ...attendanceParams,
    filterStatus: AttendanceStatus.Absence,
  });
  const { data: attendanceAttendCountData } = useAttendanceCount({
    ...attendanceParams,
    filterStatus: AttendanceStatus.Attend,
  });
  const { data: attendanceLatenessCountData } = useAttendanceCount({
    ...attendanceParams,
    filterStatus: AttendanceStatus.Lateness,
  });
  const { data: attendanceOthersCountData } = useAttendanceCount({
    ...attendanceParams,
    filterStatus: AttendanceStatus.Others,
  });
  const { data: attendanceReadyCountData } = useAttendanceCount({
    ...attendanceParams,
    filterStatus: AttendanceStatus.Ready,
  });

  const refetch = () => {
    ADMIN_ATTENDANCE_QUERY_KEYS.forEach((queryKey) => {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
    });
  };

  const deleteAttendanceBook = async () => {
    closeConfirmDialog();
    try {
      await eliceAttendanceAttendanceBookApi.attendanceBookAttendanceBookIdDelete(
        {
          attendanceBookId,
        }
      );
      refetch();
      history.push(`/admin/attendances`);
    } catch (error) {
      Sentry.captureException(error);
      enqueueSnackbar(
        intl.formatMessage({ id: 'adminAttendance.error.default' }),
        {
          variant: 'error',
        }
      );
    }
  };

  const increaseDate = () => {
    if (date) {
      const addedDate = dayjs(date).add(1, 'day');
      setDate(addedDate);
      setPage(1);
      changeQueries({
        date: dayjs(addedDate).format('YYYY-MM-DD'),
        page: 1,
      });
    }
  };

  const decreaseDate = () => {
    if (date) {
      const subtractedDate = dayjs(date).subtract(1, 'day');
      setDate(subtractedDate);
      setPage(1);
      changeQueries({
        date: dayjs(subtractedDate).format('YYYY-MM-DD'),
        page: 1,
      });
    }
  };

  const getAttendanceCount = () => {
    switch (attendanceStatus) {
      // all
      case null:
        return attendanceAllCountData?.attendanceCount ?? 0;

      case AttendanceStatus.AttendCompleted:
        return attendanceAttendCompletedCountData?.attendanceCount ?? 0;

      case AttendanceStatus.Absence:
        return attendanceAbsenceCountData?.attendanceCount ?? 0;

      case AttendanceStatus.Attend:
        return attendanceAttendCountData?.attendanceCount ?? 0;

      case AttendanceStatus.Lateness:
        return attendanceLatenessCountData?.attendanceCount ?? 0;

      case AttendanceStatus.Others:
        return attendanceOthersCountData?.attendanceCount ?? 0;

      case AttendanceStatus.Ready:
        return attendanceReadyCountData?.attendanceCount ?? 0;
    }
  };

  const paginationCount = Math.ceil(getAttendanceCount() / ROW_COUNT_PER_PAGE);

  const getFilterOptionDescription = (count?: number) => {
    return typeof count === 'number'
      ? count +
          intl.formatMessage({
            id: 'adminAttendance.unit.person',
          })
      : '-';
  };

  const getMinDate = () => {
    if (!attendanceBookData) {
      return undefined;
    }

    return dayjs(attendanceBookData.openSchedule);
  };

  const getMaxDate = () => {
    if (!attendanceBookData) {
      return undefined;
    }

    const closeSchedule = dayjs(attendanceBookData.closeSchedule).startOf(
      'day'
    );
    const today = dayjs().startOf('day');

    if (closeSchedule.isBefore(today)) {
      return closeSchedule;
    }

    return today;
  };

  const getPreviousDateDisabled = () => {
    if (!attendanceBookData) {
      return true;
    }

    const openSchedule = dayjs(attendanceBookData.openSchedule).startOf('day');
    const dateWithoutTime = dayjs(date).startOf('day');

    if (
      dateWithoutTime.isSame(openSchedule) ||
      dateWithoutTime.isBefore(openSchedule)
    ) {
      return true;
    }

    return false;
  };

  const getNextDateDisabled = () => {
    if (!attendanceBookData) {
      return true;
    }

    const closeSchedule = dayjs(attendanceBookData.closeSchedule).startOf(
      'day'
    );
    const dateWithoutTime = dayjs(date).startOf('day');
    const today = dayjs().startOf('day');

    if (
      dateWithoutTime.isSame(closeSchedule) ||
      dateWithoutTime.isAfter(closeSchedule) ||
      dateWithoutTime.isSame(today) ||
      dateWithoutTime.isAfter(today)
    ) {
      return true;
    }

    return false;
  };

  const attendanceStatusOptions = [
    {
      value: '',
      title: intl.formatMessage({
        id: 'adminAttendance.detail.filter.attendanceStatus.all',
      }),
      description: getFilterOptionDescription(
        attendanceAllCountData?.attendanceCount
      ),
    },
    {
      value: AttendanceStatus.Attend,
      title: intl.formatMessage({
        id: 'adminAttendance.attendanceStatus.attend',
      }),
      description: getFilterOptionDescription(
        attendanceAttendCountData?.attendanceCount
      ),
    },
    {
      value: AttendanceStatus.Ready,
      title: intl.formatMessage({
        id: 'adminAttendance.attendanceStatus.ready',
      }),
      description: getFilterOptionDescription(
        attendanceReadyCountData?.attendanceCount
      ),
    },
    {
      value: AttendanceStatus.AttendCompleted,
      title: intl.formatMessage({
        id: 'adminAttendance.attendanceStatus.attendCompleted',
      }),
      description: getFilterOptionDescription(
        attendanceAttendCompletedCountData?.attendanceCount
      ),
    },
    {
      value: AttendanceStatus.Lateness,
      title: intl.formatMessage({
        id: 'adminAttendance.attendanceStatus.lateness',
      }),
      description: getFilterOptionDescription(
        attendanceLatenessCountData?.attendanceCount
      ),
    },
    {
      value: AttendanceStatus.Others,
      title: intl.formatMessage({
        id: 'adminAttendance.attendanceStatus.others',
      }),
      description: getFilterOptionDescription(
        attendanceOthersCountData?.attendanceCount
      ),
    },
    {
      value: AttendanceStatus.Absence,
      title: intl.formatMessage({
        id: 'adminAttendance.attendanceStatus.absence',
      }),
      description: getFilterOptionDescription(
        attendanceAbsenceCountData?.attendanceCount
      ),
    },
  ];

  const closeConfirmDialog = () => {
    setConfirmDialog(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearchQueryChanged(true);
    setSearchQuery(event.target.value);
  };

  const handleDateChange: (
    value: dayjs.Dayjs | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => void = (value) => {
    if (value) {
      setDate(value);
      setPage(1);
      changeQueries({ date: value.format('YYYY-MM-DD'), page: 1 });
    }
  };

  const handleAttendanceEditButtonClick = () => {
    setIsAttendanceBookEditModalOpened(true);
  };

  const handleAttendanceDeleteButtonClick = () => {
    setConfirmDialog({
      type: 'delete',
    });
  };

  const handleFilterChange = (
    _: React.MouseEvent<HTMLElement>,
    attendanceStatus: AttendanceStatus | ''
  ) => {
    setPage(1);
    changeQueries({ page: 1 });
    setAttendanceStatus(attendanceStatus || null);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
    changeQueries({ page });
  };

  const handleOrderByChange = (requestedOrderBy: OrderBy) => {
    const isAsc = orderBy === requestedOrderBy && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(requestedOrderBy);
  };

  const handleMemberManageButtonClick = () => {
    history.push(`/admin/attendances/${attendanceBookId}/users`);
  };

  return (
    <>
      <Paper elevation={0} sx={{ padding: '1.5rem', borderRadius: '1rem' }}>
        <Stack spacing="1.5rem">
          {/* header */}
          <Stack
            component="header"
            direction="row"
            gap="0.5rem"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Stack spacing="0.5rem">
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  color="inherit"
                  onClick={() => history.push('/admin')}
                >
                  <FormattedMessage id="adminAttendance.detail.breadcrumbs.organizationManagement" />
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  onClick={() => history.push('/admin/attendances')}
                >
                  <FormattedMessage id="adminAttendance.detail.breadcrumbs.attendanceBook" />
                </Link>
                <Typography color="text.primary" fontWeight={700}>
                  {attendanceBookData?.title ?? '-'}
                </Typography>
              </Breadcrumbs>
              <Typography component="h2" variant="h6">
                {attendanceBookData?.title ?? '-'}
              </Typography>
            </Stack>
            <Stack direction="row" gap="0.5rem" flexWrap="wrap">
              <Button
                color="neutral"
                variant="contained"
                startIcon={<IconDelete />}
                onClick={handleAttendanceDeleteButtonClick}
              >
                <FormattedMessage id="adminAttendance.detail.buttons.deleteAttendanceBook" />
              </Button>
              <Button
                color="neutral"
                variant="contained"
                startIcon={<IconEdit />}
                onClick={handleAttendanceEditButtonClick}
              >
                <FormattedMessage id="adminAttendance.detail.buttons.editAttendanceBook" />
              </Button>
            </Stack>
          </Stack>

          <AttendanceInfo attendanceBookId={attendanceBookId} />

          <Stack spacing="1rem">
            {/* toolbar */}
            <Stack spacing="0.5rem">
              <Typography
                component="h3"
                variant="body1"
                color={(theme) => theme.palette.text.secondary}
                fontWeight={700}
              >
                <FormattedMessage id="adminAttendance.detail.subtitle.memberAttendanceStatus" />
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap="1rem">
                <TextField
                  value={searchQuery}
                  onChange={handleSearchChange}
                  variant="outlined"
                  size="small"
                  placeholder={intl.formatMessage({
                    id: 'adminAttendance.detail.textField.search.placeholder',
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconSearch />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '.MuiInputBase-root': {
                      width: '15.625rem',
                    },
                  }}
                />
                <Stack direction="row" alignItems="center">
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale={intl.locale}
                  >
                    <DatePicker
                      value={date}
                      onChange={handleDateChange}
                      slots={{ openPickerIcon: IconDateRange }}
                      slotProps={{
                        textField: {
                          required: true,
                          size: 'small',
                        },
                      }}
                      minDate={getMinDate()}
                      maxDate={getMaxDate()}
                      sx={{
                        marginRight: '0.5rem',
                      }}
                    />
                  </LocalizationProvider>
                  <IconButton
                    sx={{ flexShrink: 0 }}
                    size="small"
                    disabled={getPreviousDateDisabled()}
                    onClick={decreaseDate}
                  >
                    <IconArrowBackIos />
                  </IconButton>
                  <IconButton
                    sx={{ flexShrink: 0 }}
                    size="small"
                    disabled={getNextDateDisabled()}
                    onClick={increaseDate}
                  >
                    <IconArrowForwardIos />
                  </IconButton>
                </Stack>
                <Stack
                  direction="row"
                  gap={1}
                  flexWrap="wrap"
                  sx={{ marginLeft: 'auto' }}
                >
                  <Button
                    color="neutral"
                    startIcon={<IconPerson />}
                    onClick={handleMemberManageButtonClick}
                  >
                    <FormattedMessage id="adminAttendance.detail.buttons.memberManagement" />
                  </Button>
                  <Button
                    startIcon={<IconFileDownload />}
                    onClick={download}
                    disabled={downloadLoading}
                  >
                    <FormattedMessage id="adminAttendance.detail.buttons.downloadAttendanceBook" />
                  </Button>
                </Stack>
              </Stack>
            </Stack>

            {/* attendance status filters */}
            <FilterToggleButtonGroup
              value={attendanceStatus ?? ''}
              options={attendanceStatusOptions}
              onChange={handleFilterChange}
            />

            {/* table */}
            <AdminAttendanceDetailTable
              rows={attendanceData}
              isLoading={attendanceLoading}
              isEmpty={
                attendanceData?.length === 0 && !Boolean(debouncedSearchQuery)
              }
              isFaceDetection={attendanceBookData?.faceDetection.enabled}
              isSearchEmpty={
                attendanceData?.length === 0 && Boolean(debouncedSearchQuery)
              }
              order={order}
              orderBy={orderBy}
              paginationCount={paginationCount}
              page={page}
              onPageChange={handlePageChange}
              onOrderByChange={handleOrderByChange}
            />
          </Stack>
        </Stack>
      </Paper>

      {/* modals */}

      <AttendanceBookFormModal
        open={isAttendanceBookEditModalOpened}
        attendanceBookId={attendanceBookId}
        onCloseModal={() => setIsAttendanceBookEditModalOpened(false)}
      />

      {/* dialogs */}

      <ConfirmDialog
        open={confirmDialog?.type === 'delete'}
        title={intl.formatMessage({
          id: 'adminAttendance.detail.confirmDialog.delete.title',
        })}
        description={intl.formatMessage({
          id: 'adminAttendance.detail.confirmDialog.delete.description',
        })}
        cancelLabel={intl.formatMessage({
          id: 'adminAttendance.detail.confirmDialog.delete.cancel',
        })}
        submitLabel={intl.formatMessage({
          id: 'adminAttendance.detail.confirmDialog.delete.submit',
        })}
        submitButtonColor="error"
        onClose={closeConfirmDialog}
        onSubmit={deleteAttendanceBook}
      />
    </>
  );
};

export default AdminAttendanceDetail;
```
