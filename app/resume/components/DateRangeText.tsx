type DateRangeTextProps = {
  children: React.ReactNode;
};

const DateRangeText = ({ children }: DateRangeTextProps) => {
  return <span style={{ fontSize: '1rem', fontWeight: 400 }}>{children}</span>;
};

export default DateRangeText;
