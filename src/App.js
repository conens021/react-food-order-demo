import './App.css';
import React from 'react';

import Header from './components/header/Header';
import Menu from './components/menu/Menu';


function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Menu />
      </main>
    </React.Fragment>
  );
}

export default App;
