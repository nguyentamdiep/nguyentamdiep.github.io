import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Home
        </Typography>
        <Typography variant="h5" color="text.secondary">
          This is the home page
        </Typography>
      </Box>
    </Container>
  );
}
