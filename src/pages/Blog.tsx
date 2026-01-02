import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function Blog() {
 
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
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Blog
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Read our latest articles
        </Typography>
      </Box>
     
    </Container>
  );
}
