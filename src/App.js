import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Employees from './pages/Employees/Employees'
import Employee from './pages/Employee/Employee'
import NotFound from './pages/NotFound/NotFound'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Employees} />
      <Route exact path="/employees" component={Employees} />
      <Route exact path="/employees/id" component={Employee} />
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
