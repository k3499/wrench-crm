import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Routs from '../Routs/Routs';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='wrapper'>
        <div className='main'>
          <Sidebar />
          <div className="content">
            <Routs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;