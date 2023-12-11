import Stack from '@mui/material/Stack';

type StackHeading3Props = { children: React.ReactNode };

const StackHeading3: React.FC<StackHeading3Props> = ({ children }) => {
  return (
    <Stack
      component="h3"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={0.5}
    >
      {children}
    </Stack>
  );
};

export default StackHeading3;
