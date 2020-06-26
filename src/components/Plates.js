import React from 'react';


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
          title:'Titolo piatto',
          description:'Lorem ipsum dolor sit amet, consectetur adipishing elit'
        },
        card3:{
          title:'Titolo piatto',
          description:'Lorem ipsum dolor sit amet, consectetur adipishing elit'
        },
      }
    }
  }


  render(){
    return (
    <div className='bestPractice lg:h-screen sm:h-auto w-full bg-pink-500 relative'>
      <h3 className='font-bold text-4xl text-white text-center uppercase pt-16'>Best practice</h3>
      <p className='font-thin text-base text-white text-center pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
      <div className='container mx-auto max-w-screen-lg px-4 h-auto'>
      <img src='/img/sushi.png' className='absolute sushi' alt='sushi' />
      <img src='/img/sushi2.png' className='absolute sushi' alt='sushi' />
      <div className='flex flex-wrap items-center justify-evenly mt-20'>

          <div className='w-56 h-auto card'>
            <div className='w-full h-auto'>
              <img src='/img/piatto1.png' className='w-full h-full object-cover' alt='sushi' />
            </div>
            <h3 className='text-center font-bold text-2xl pt-4 text-white' >{ this.state.cards.card1.title }</h3>
            <p className='text-center font-thin text-base text-white pt-2'>{ this.state.cards.card1.description }</p>
          </div>  {/* Card */}

          <div className='w-56 h-auto card'>
            <div className='w-full h-auto'>
              <img src='/img/piatto2.png' className='w-full h-full object-cover' alt='sushi' />
            </div>
            <h3 className='text-center font-bold text-2xl pt-4 text-white' >{ this.state.cards.card1.title }</h3>
            <p className='text-center font-thin text-base text-white pt-2'>{ this.state.cards.card1.description }</p>
          </div>  {/* Card */}

          <div className='w-56 h-auto card'>
            <div className='w-full h-auto'>
              <img src='/img/piatto3.png' className='w-full h-full object-cover' alt='sushi' />
            </div>
            <h3 className='text-center font-bold text-2xl pt-4 text-white' >{ this.state.cards.card1.title }</h3>
            <p className='text-center font-thin text-base text-white pt-2'>{ this.state.cards.card1.description }</p>
          </div>  {/* Card */}

        </div> {/* Grid */}
      </div> {/* Container */}

    </div>
    )
  }
}

export default Plates;
