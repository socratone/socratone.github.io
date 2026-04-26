type CompanyDescriptionProps = {
  children: React.ReactNode;
};

const CompanyDescription = ({ children }: CompanyDescriptionProps) => {
  return <span style={{ color: '#73716e' }}>{children}</span>;
};

export default CompanyDescription;
