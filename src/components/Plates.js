import React from 'react';
import CardPlate from './utility/CardPlate'


class Plates extends React.Component {

  constructor(prop){
    super(prop)
    this.state = {
      cards:{
        card1:{
          title:'Titolo piatto',
          description:'Lorem ipsum dolor sit amet, consectetur adipishing elit'
        },
        card2:{
          title:'Titolo piatto 2',
          description:'Lorem ipsum dolor sit amet, consectetur adipishing elit'
        },
        card3:{
          title:'Titolo piatto 3',
          description:'Lorem ipsum dolor sit amet, consectetur adipishing elit'
        },
      }
    }
  }


  render(){
    return (
    <section className='bestPractice lg:h-screen sm:h-auto w-full bg-pink-700 relative'>
      <h3 className='font-bold text-4xl text-white text-center uppercase pt-16'>Best practice</h3>
      <p className='font-thin text-base text-white text-center pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
      <div className='container mx-auto max-w-screen-lg px-4 h-auto'>
      <img src='/img/sushi.png' className='absolute sushi' alt='sushi' />
      <img src='/img/sushi2.png' className='absolute sushi2' alt='sushi' />
      <div className='flex flex-wrap items-center justify-evenly mt-20'>

      <CardPlate title={ this.state.cards.card1.title } description={ this.state.cards.card1.description } img='/img/piatto1.png'/>
      <CardPlate title={ this.state.cards.card2.title } description={ this.state.cards.card2.description } img='/img/piatto2.png'/>
      <CardPlate title={ this.state.cards.card3.title } description={ this.state.cards.card3.description } img='/img/piatto3.png'/>

        </div> {/* Grid */}
      </div> {/* Container */}

    </section>
    )
  }
}

export default Plates;
