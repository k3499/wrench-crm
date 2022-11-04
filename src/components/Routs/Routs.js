import React from 'react';
import { Route, Switch } from 'react-router-dom';
import News from '../News/News';
import Address from '../Address/Address';

function Routs() {

  const handleSearchSubmit = (query) => (
    console.log(query)
  );
  
  return (
      <Switch>
        <Route exact path="/">
          <News />
        </Route>
        <Route path="/adress">
          <Address handleSearchSubmit={handleSearchSubmit}/>
        </Route>
      </Switch>
  );
}

export default Routs;
