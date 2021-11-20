import React, { useState } from 'react'
import { Avatar, ButtonGroup, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring'

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

      //Buttons array
      const buttons = [
        <Button key="one">Twitter</Button>,
        <Button key="two">Email</Button>,
        <Button key="three">LinkedIn</Button>,
        <Button key="four">Calendly</Button>,
    ];

    //useState that holds true if contact menu dropdown is open or false if it is closed
    const [menuDropdown, setMenuDropdown] = useState(false);

    //useSpring animations to open/close contact menu
    const openMenu = useSpring({
        top: "13vh",
        opacity: 1,

        from: {
            top: "0.5vh",
            opacity: 0,
        },
        reset: true
    })

    const closeMenu = useSpring({
        top: "0.5vh",
        opacity: 0,

        from: {
            top: "13vh",
            opacity: 1
        },
        reset: true
    })

    function toggleMenu(){
        if(menuDropdown == true){
            setMenuDropdown(false)
        }
        else{
            setMenuDropdown(true)
        }
    }

    return (
        <div id="header-nav">
            <div id="header-content">
                <div id="profile-info" onClick={toggleMenu}>
                    <Avatar id="header-avatar" alt="Adrianne Bartolo" src={AdrianneProfile}/>
                    <div>
                        <h3>Adrianne Bartolo</h3>
                        <p>Marketing Associate</p>
                    </div>
                </div>

                <animated.div id="container-contact-button-group" style={menuDropdown==true ? closeMenu : openMenu}>
                    <ButtonGroup
                        id="contact-button-group"
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="contained"
                    >
                        {buttons}
                    </ButtonGroup>
                </animated.div>

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
