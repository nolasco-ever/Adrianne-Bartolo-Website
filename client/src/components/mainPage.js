import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  //import necessary components
  import AboutMe from './aboutMe';
  import Header from './header';

export default function MainPage() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <AboutMe/>
                </Route>
            </Switch>
        </Router>
    )
}
