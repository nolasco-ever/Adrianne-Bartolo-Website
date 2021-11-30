import React, { useState } from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring'

  //import component
import AdrianneProfile from './images/Adrianne_Bartolo.jpg'

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

  const [imageOpen, setImageOpen] = useState(false);

  const openImage = useSpring({
    width: "50vw",
    backgroundColor: "#D8A6A7",

    from: {
      width: "100vw",
      backgroundColor: "#E4AFB0"
    },
    reset: true
  })

  const closeImage = useSpring({
    width: "100vw",
    backgroundColor: "#E4AFB0",

    from: {
      width: "50vw",
      backgroundColor: "#D8A6A7"
    },
    reset: true
  })

  function toggleImage(){
    if (imageOpen ==  true){
      setImageOpen(false)
    }
    else{
      setImageOpen(true)
    }
  }

  return (
    <div>
      <div id="projects-header">
          <ThemeProvider theme={theme}>
              <Button>Social Media</Button>
              <Button>Email Marketing</Button>
          </ThemeProvider>
      </div>

      <div id="projects-container">
        <animated.div id="projects-grid-container" style={imageOpen==true ? openImage : closeImage}>
          <div>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
            <img src={AdrianneProfile} onClick={toggleImage}/>
          </div>
        </animated.div>

        <div id="projects-display-container">

        </div>
      </div>
    </div>
  )
}
