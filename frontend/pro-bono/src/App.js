import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddLawer from "./components/add-lawer.component";
import Lawer from "./components/add-lawer.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container mt-3">
            <Switch>
              <Route exact path="/add" component={AddLawer} />
              <Route path="/lawers/:id" component={Lawer} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;