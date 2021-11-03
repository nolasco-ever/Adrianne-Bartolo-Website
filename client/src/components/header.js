import React from 'react'
import { Avatar, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//import component
import AdrianneProfile from './images/Adrianne_Bartolo.jpg'

export default function Header() {
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
        <div id="header-nav">
            <div id="header-content">
                <div id="profile-info">
                    <Avatar id="header-avatar" alt="Adrianne Bartolo" src={AdrianneProfile}/>
                    <div>
                        <h3>Adrianne Bartolo</h3>
                        <p>Marketing Associate</p>
                    </div>
                </div>

                <div id="button-group">
                    <ThemeProvider theme={theme}>
                        <Button size="large">About Me</Button>
                        <Button size="large">Projects</Button>
                    </ThemeProvider>
                </div>
            </div>

            <div class="bottom-border">&nbsp;</div>
        </div>
    )
}
