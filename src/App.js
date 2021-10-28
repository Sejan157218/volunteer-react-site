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
import Myevent from './Components/Myevent/Myevent';
import Admin from './Components/Admin/Admin';




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
          <Link to="/myevent">
            My Event
          </Link>
          <Link to="/registration">
            Registration
          </Link>
          <Link to="/admin">
            Admin
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
          <Route path="/myevent">
            <Myevent />
          </Route>
          <Route path="/admin">
            <Admin />
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
