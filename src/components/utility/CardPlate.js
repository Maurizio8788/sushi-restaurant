import React from 'react';


function CardPlate(prop){

  return (

    <div className='w-56 h-auto card'>
      <div className='w-full h-auto'>
        <img src={ prop.img } className='w-full h-full object-cover' alt='sushi' />
      </div>
      <h3 className='text-center font-bold text-2xl pt-4 text-white' >{ prop.title }</h3>
      <p className='text-center font-thin text-base text-white pt-2'>{ prop.description }</p>
    </div>
  )

}

export default CardPlate;
