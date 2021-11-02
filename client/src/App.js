import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//import necessary components
import PageMenu from './components/pageMenu';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PageMenu/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
