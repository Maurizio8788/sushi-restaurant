import React from 'react';


function CardCounter(prop){

  const style = {
    width:'276px',
    height:'278px',
  }

  return (

    <div style={style} className='border-4 border-white border-solid rounded-full flex justify-center items-center'>
    <h4 className='font-bold text-5xl text-center text-white uppercase'>{prop.store}<br /> <span className='font-bold text-5xl text-center text-white uppercase'>{prop.title}</span> </h4>
    </div>

  )

}

export default CardCounter;
