import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
        <Router>

            <div id="projects-header">
                <ThemeProvider theme={theme}>
                    <Button>Social Media</Button>
                    <Button>Email Marketing</Button>
                </ThemeProvider>
            </div>

            <Switch>
                <Route exact path="/">

                </Route>
            </Switch>
        </Router>
    )
}
