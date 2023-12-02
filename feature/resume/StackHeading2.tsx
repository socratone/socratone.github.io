import Stack from '@mui/material/Stack';

type StackHeading2Props = { children: React.ReactNode };

const StackHeading2: React.FC<StackHeading2Props> = ({ children }) => {
  return (
    <Stack
      component="h2"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={0.5}
    >
      {children}
    </Stack>
  );
};

export default StackHeading2;
