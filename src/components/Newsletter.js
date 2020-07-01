import React from 'react';


function Newsletter(){

  return(
    <section className='w-full relative pb-64 pt-48' id='newsletter'>
      <div className='container max-w-screen-lg mx-auto px-4'>
      <h3 className='text-center text-pink-700 font-bold text-5xl uppercase'>Subscribe</h3>
      <p className='text-center text-pink-700 font-thin text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src='/img/sushi2.png' alt='' className='absolute top-0 right-0' id='sushi2'/>
      <img src='/img/sushi3.png' alt='' className='absolute left-0 top-0' id='sushi3'/>
      <img src='/img/prawn.png' alt='' className='absolute' id='prawn'/>
        <form>

        <div className='flex justify-center items-center relative pt-10' id='grid-form'>

          <input type='email' className='rounded-full p-4 border bg-gray-500 text-gray-700 placeholder-black w-3/4' placeholder='Your Email' required/>
          <button type='submit' className='rounded-full bg-pink-700 text-white px-10 py-4 uppercase font-bold absolute right-0'>Subscribe</button>

        </div>

        </form>
      </div>
    </section>
  )
}


export default Newsletter;
