import { Dayjs } from 'dayjs';

export type Company = 'elice' | 'gymt' | 'iportfolio';

export type Career = {
  company: Company;
  start: Dayjs;
  end: Dayjs;
};
