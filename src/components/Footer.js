import React from 'react';

function Footer(){

  return (

    <footer className='w-full relative'>
    <img src='/img/sushi-prawn.png' alt='sushi prawn' className='absolute' id='sushi-prawn'/>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <div className='flex flex-wrap justify-between items-center pt-64 space-x-1' id='grid-footer'>

          <div className='w-1/4 h-auto pb-10'>
            <h3 className='text-white text-3xl pb-8'>Sushime</h3>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at felis nec massa consectetur aliquet et vel nunc, non elementum neque eleifend. </p>
            <ul className='flex flex-wrap justify-between pt-8 w-2/3'>
              <li className='bg-white rounded-full h-8 w-8 flex items-center justify-center'><i className='fab fa-facebook-f'></i></li>
              <li className='bg-white rounded-full h-8 w-8 flex items-center justify-center'><i className='fab fa-instagram'></i></li>
              <li className='bg-white rounded-full h-8 w-8 flex items-center justify-center'><i className='fab fa-twitter'></i></li>
              <li className='bg-white rounded-full h-8 w-8 flex items-center justify-center'><i className='fab fa-whatsapp'></i></li>
            </ul>
          </div> {/* colonna footer */}

          <div className='w-56 h-auto'>
            <h3 className='text-white text-3xl pb-2'>About</h3>
            <ul className='flex flex-col flex-wrap justify-between w-2/3'>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>History</a></li>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>Our Team</a></li>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>Brand Guidelines</a></li>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>Terms&Condition</a></li>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>Privacy Policy</a></li>
            </ul>
          </div> {/* colonna footer */}

          <div className='w-56 h-auto'>
            <h3 className='text-white text-3xl pb-2'>Services</h3>
            <ul className='flex flex-col flex-wrap justify-between w-2/3'>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>How to Order</a></li>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>Our Product</a></li>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>Order Status</a></li>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>Promo</a></li>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>Payament Method</a></li>
            </ul>
          </div> {/* colonna footer */}

          <div className='w-56 h-full pb-24'>
            <h3 className='text-white text-3xl pb-4'>Other</h3>
            <ul className='flex flex-col flex-wrap justify-between w-2/3'>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>Contact us</a></li>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>Help</a></li>
              <li className='py-1 text-white text-xl'><a className='hover:text-pink-700' href=''>Privacy</a></li>
            </ul>
          </div> {/* colonna footer */}

        </div> {/* Row */}
      </div> {/* Container */}
    </footer>
  )
}

export default Footer;
