import logo from './logo.svg';
import './App.css';
import { SearchProvider } from "./context/SearchProvider";
// import { BrowserRouter as Router, Route, Switch, NavLink, Link } from "react-router-dom";
import Header from "./components/Header";
import Browser from "./components/Browser";
import Trigger from "./components/Trigger";
import Survey from "./components/Survey";

function App() {
  return (
    <div className="App">
      <Header />
      <Trigger />
      <Browser />
      {/* <Survey /> */}
      {/* <Router>
          <Switch>
            <Route path="/news" exact>
              <Browser />
            </Route>
          </Switch>
        </Router> */}

    </div>
  );
}

export default App;
