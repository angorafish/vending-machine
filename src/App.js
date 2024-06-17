import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack1 from './Snack1';
import Snack2 from './Snack2';
import Snack3 from './Snack3';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/snack1" component={Snack1} />
          <Route exact path="/snack2" component={Snack2} />
          <Route exact path="/snack3" component={Snack3} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
