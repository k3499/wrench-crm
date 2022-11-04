import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import AddressApi from '../../utils/AddressApi';
import News from '../News/News';
import Address from '../Address/Address';
import { SearchAddressContext } from '../../contexts/SearchAddressContext';

function App() {
  const [addressList, setAddressList] = useState();
  const [isFound, setIsFound] = useState(false);
  var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  var token = "46b793c77733005b6af2ca8c95d4fbc97d4ab18c";
  
  
  var options = {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + token
      },
      body: JSON.stringify({query: "лен"})
  }
  useEffect(() => {

  }, []);

  //данные от клика по поиску
  const handleSearchSubmit = (query) => (
   fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({query: query})
})
   .then(res => res.json())
   .then((res) => {
    setAddressList( res.suggestions );
    setIsFound(true);
   })
  .catch((err) => console.log(err)));

  // function handleSearchSubmit (query) {
    
  //   if (query == "") {
  //     console.log(query);
  //   } else {
      
  //   }
  // };

  return (
    <SearchAddressContext.Provider value={ [addressList, setAddressList] }>
      <div className='App'>
        <Header />
        <div className='wrapper'>
          <div className='main'>
            <Sidebar />
            <div className="content">
            <Switch>
              <Route exact path="/">
                <News />
              </Route>
              <Route path="/adress">
                <Address handleSearchSubmit={handleSearchSubmit} isFound={isFound}/>
              </Route>
            </Switch>
            </div>
          </div>
        </div>
      </div>
    </SearchAddressContext.Provider>
  );
}

export default App;