import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function AboutMe() {
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
          About Me
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Learn more about me and my work
        </Typography>
      </Box>
    </Container>
  );
}
