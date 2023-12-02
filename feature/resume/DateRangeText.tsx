import dayjs, { Dayjs } from 'dayjs';
import { convertMonthsToYearsAndMonths } from 'utils/date';

type DateRangeTextProps = {
  start: Dayjs;
  end: Dayjs;
};

const DateRangeText: React.FC<DateRangeTextProps> = ({ start, end }) => {
  const months = end.diff(start, 'month');
  const isEmployed = dayjs().startOf('day').isSame(end.startOf('day'));

  return (
    <>
      {start.format('YYYY.M')} ~ {isEmployed ? '재직 중' : end.format('YYYY.M')}{' '}
      ({convertMonthsToYearsAndMonths(months + 1)})
    </>
  );
};

export default DateRangeText;
