import React from 'react';

  import { Button } from '@mui/material';
  import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Projects() {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#000'
          },
          neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
        },
      });

    return (
      <div>
        <div id="projects-header">
            <ThemeProvider theme={theme}>
                <Button>Social Media</Button>
                <Button>Email Marketing</Button>
            </ThemeProvider>
        </div>

        <div id="projects-container">
          <div id="projects-grid-container">
            <div>
              <img/>
              <img/>
              <img/>
              <img/>
              <img/>
              <img/>
              <img/>
              <img/>
              <img/>
              <img/>
              <img/>
              <img/>
              <img/>
              <img/>
              <img/>
            </div>
          </div>

          <div id="projects-display-container">

          </div>
        </div>
      </div>
    )
}
