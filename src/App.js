import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Registration from './Components/Share/Registration/Registration';
import AddEvent from './Components/AddEvent/AddEvent';




function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to="/home">
            Home
          </Link>
          <Link to="/addevent">
            Add Event
          </Link>
          <Link to="/registration">
            Registration
          </Link>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addevent">
            <AddEvent />
          </Route>
          <Route path="/registration/:id">
            <Registration />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
