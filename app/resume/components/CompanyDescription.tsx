import { Box } from '@mui/material';

type CompanyDescriptionProps = {
  children: React.ReactNode;
};

const CompanyDescription = ({ children }: CompanyDescriptionProps) => {
  return (
    <Box component="span" sx={{ fontStyle: 'italic' }}>
      {children}
    </Box>
  );
};

export default CompanyDescription;
