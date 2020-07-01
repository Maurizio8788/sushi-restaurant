import React from 'react';
import Glide from '@glidejs/glide'

function Testimonial(){

  const style = {
    background:"linear-gradient( rgba(170,94,100,.7),rgba(170,94,100,.7) ),url('/img/testimonial-hero.png') no-repeat center center/cover"
  }

  return (

    <section style={style} className='lg:h-screen w-full' id='testimonial'>

    <div className='container max-w-screen-lg mx-auto px-4'>

    <div className='w-full h-auto pt-24 mx-auto'>
      <div className='w-56 h-auto lg:mx-auto'>
        <img src='/img/testimonial.png' className='w-full h-auto object-cover' alt='testimnial'/>
      </div>
      <p className='mt-6 text-white text-2xl text-center'>Se sei un fan della cucina, se ti piace passare del tempo in cucina, avrai piacere di trovare tu stesso risorse affidabili con cui realizzare le tue ricette.</p>
      <p className='mt-6 text-white text-5xl font-bold text-center'>Phoebe Frazier</p>
    </div>




    </div>
    </section>
  )
}

export default Testimonial;
