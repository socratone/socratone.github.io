import dayjs from 'dayjs';

import type { Career } from './types';

/** resume-pdf script를 돌렸을 때에만 phone이 있다. */
export const phone = process.env.NEXT_PUBLIC_PHONE;

export const CAREERS: Career[] = [
  {
    company: 'elice',
    start: dayjs('2022-6'),
    end: dayjs(),
  },
  {
    company: 'gymt',
    start: dayjs('2021-3'),
    end: dayjs('2022-5'),
  },
  {
    company: 'iportfolio',
    start: dayjs('2020-9'),
    end: dayjs('2020-11'),
  },
];
