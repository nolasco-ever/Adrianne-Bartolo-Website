import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import necessary components
import LandingPage from './components/landingPage';
import MainPage from './components/mainPage';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          {/* <LandingPage/> */}
          <LandingPage/>
        </Route>

        <Route path='/mainpage'>
          <MainPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
