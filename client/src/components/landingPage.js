import React from 'react'
import { useHistory } from 'react-router';
import { Avatar, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//import component
import AdrianneProfile from './images/Adrianne_Bartolo.jpg'

export default function LandingPage() {
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

      const history = useHistory();

    return (
        <div className="container" id="page-menu-container">
            <Avatar id="page-menu-avatar" alt="Adrianne Bartolo" src={AdrianneProfile}/>

            <div>
                <h4>Adrianne Bartolo</h4>
                <p>Marketing Associate</p>
            </div>

            <div id="divider"></div>

            <ThemeProvider theme={theme}>
                <Button onClick={() => history.push('/mainpage/aboutme')}>About Me</Button>
                <Button onClick={() => history.push('/mainpage/projects')}>Projects</Button>
            </ThemeProvider>
        </div>
    )
}
