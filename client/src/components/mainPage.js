import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  //import necessary components
  import AboutMe from './aboutMe';
  import Projects from './projects';
  import Header from './header';

export default function MainPage() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/mainpage/aboutme">
                    <AboutMe/>
                </Route>

                <Route path="/mainpage/projects">
                    <Projects/>
                </Route>
            </Switch>
        </Router>
    )
}
