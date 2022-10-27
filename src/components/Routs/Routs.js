import React from 'react';
import { Route, Switch } from 'react-router-dom';
import News from '../News/News';
import Address from '../Address/Address';

function Routs() {
  return (
    <Switch>
        <Route exact path="/">
          <News />
        </Route>
        <Route path="/adress">
          <Address />
        </Route>
      </Switch>
  );
}

export default Routs;
