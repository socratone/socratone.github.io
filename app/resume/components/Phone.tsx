/** resume-pdf script를 돌렸을 때에만 phone이 있다. */
const Phone = () => {
  return <span>{process.env.NEXT_PUBLIC_PHONE ?? '-'}</span>;
};

export default Phone;
