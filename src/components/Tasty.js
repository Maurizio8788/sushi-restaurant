import React from 'react';

function Tasty(prop){

    return (

    <div className='block container max-w-screen-lg my-32 mx-auto px-4'>

    <div className='flex justify-between items-center'>

      <div className='h-auto w-full'>
        <img src='/img/Tasty.png' className='h-auto w-auto object-cover' alt='Tasty' />
      </div>

      <div className='h-auto w-full'>
        <h3 className='text-pink-500 font-bold text-5xl uppercase mb-8'>{prop.title}</h3>
        <p className='text-pink-400 text-xl leading-loose'>{prop.paragraph}</p>
        <button className='bg-pink-700 text-white hover:text-gray-300 font-bold text-xl py-2 px-10 rounded-full uppercase mt-8'>Order now</button>
      </div>

    </div>

    </div>
   )

}

export default Tasty;
