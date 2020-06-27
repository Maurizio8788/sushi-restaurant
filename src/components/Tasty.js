import React from 'react';

function Tasty(prop){

    return (

    <section className='container max-w-screen-lg my-32 mx-auto px-4 h-screen tasty'>

    <div className='flex justify-around items-center w-full grid'>

      <div className='h-auto w-full'>
        <img src='/img/Tasty.png' className='h-auto w-full object-cover' alt='Tasty' />
      </div>

      <div className='h-auto w-full lg:p-8'>
        <h3 className='text-pink-700 font-bold text-5xl uppercase mb-8'>{prop.title}</h3>
        <p className='text-pink-700 text-xl leading-loose'>{prop.paragraph}</p>
        <button className='bg-pink-700 text-white hover:text-gray-300 font-bold text-xl py-2 px-10 rounded-full uppercase mt-8'>Order now</button>
      </div>

    </div>

    </section>
   )

}

export default Tasty;
