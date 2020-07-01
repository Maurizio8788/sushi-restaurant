import React from 'react';
import CardCounter from './utility/CardCounter';


class Counter extends React.Component {

constructor( prop ){

  super(prop);

  this.state = {
    store:'123',
    menu:'100',
    chef:'200'
  }

}



render(){


return(
    <section className='w-full h-screen sm:h-full bg-pink-700 counter relative'>
    <img src='/img/sushi-prawn2.png' alt='sushi-prawn2' className='absolute' id='sushi-prawn2' />
        <div className = 'container max-w-screen-lg px-4 mx-auto'>
          <h3 className='font-bold text-5xl text-center text-white uppercase pt-20 relative'>Statistics</h3>
          <p className='font-thin text-base text-center text-white pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className='flex justify-around items-center flex-wrap py-16'>
          <CardCounter store={this.state.store} title='Store'/>
          <CardCounter store={this.state.menu} title='Menu'/>
          <CardCounter store={this.state.chef} title='Chef'/>
          </div>
        </div>
    </section>
  )
}


}

export default Counter;
