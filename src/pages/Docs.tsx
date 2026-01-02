import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';
import React, { useState, useEffect } from 'react';

export default function Docs() {
   const [content, setContent] = useState('');
  
    useEffect(() => {
      fetch('../public/test.md')
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, []);

  return (
    // <Container
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     pt: { xs: 14, sm: 20 },
    //     pb: { xs: 8, sm: 12 },
    //   }}
    // >
    //   <Box sx={{ textAlign: 'center' }}>
    //     <Typography variant="h2" component="h1" gutterBottom>
    //       Documentation
    //     </Typography>
    //     <Typography variant="h5" color="text.secondary">
    //       Find all the documentation you need here
    //     </Typography>
    //       <div>
    //     <ReactMarkdown>{content}</ReactMarkdown>
    //   </div>
    //   </Box>
    // </Container>
      <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pt: { xs: 14, sm: 20 },
              pb: { xs: 8, sm: 12 },
            }}
          >
            <div>
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>

          </Container>
  );
}
