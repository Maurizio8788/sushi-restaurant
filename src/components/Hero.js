import React from 'react';

function Header(prop){

  const bgHero = {
    background: 'url(/img/hero.jpg) no-repeat center center/cover',
    height:'700px'
  }

  return (

  <div style={bgHero} >
    <div className = 'container h-full'>
      <div className='flex justify-start items-center xl:p-20 h-full'>
        <div className='sm:w-auto sm:text-center lg:text-left lg:w-1/3 ml-2'>
          <h1 className='text-5xl font-bold text-white'>{prop.title}</h1>
          <p className='leading-normal text-base text-white'>{prop.subtitle}</p>
          <button className='bg-white text-pink-500 hover:text-pink-700 font-bold text-xl py-2 px-10 rounded-full uppercase mt-8'>Order now</button>
        </div>
      </div>
    </div>
  </div>


  )

}

export default Header;
