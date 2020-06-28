import React from 'react';
import Header from './components/Header'
import Plates from './components/Plates'
import Tasty from './components/Tasty'
import Counter from './components/Counter'
import Testimonial from './components/Testimonial'
import './assets/main.css';
import './assets/style.css';

function App() {

const x = React.createRef();



  return (
    <div>
      <Header />
      <main>
        <Plates />
        <Tasty direction='row' img='/img/Tasty.png' title='best tasty' paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <Counter />
        <Tasty direction='row-reverse' img='/img/delicious.png' title='Delicious' paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <Testimonial />
      </main>
    </div>
  );
  console.log(x);

}

export default App;
