import React from 'react';
import Header from './components/Header'
import Plates from './components/Plates'
import Tasty from './components/Tasty'
import './assets/main.css';
import './assets/style.css';

function App() {
  return (
    <div>
      <Header />
      <Plates />
      <Tasty title='best tasty' paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
    </div>
  );
}

export default App;
