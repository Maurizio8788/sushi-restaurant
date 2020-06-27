import React from 'react';
import Header from './components/Header'
import Plates from './components/Plates'
import Tasty from './components/Tasty'
import Counter from './components/Counter'
import './assets/main.css';
import './assets/style.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Plates />
        <Tasty title='best tasty' paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <Counter />
      </main>
    </div>
  );
}

export default App;
