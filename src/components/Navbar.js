import React, {Component} from 'react';


function Navbar(prop){

  return (

    <div>
    <nav className="flex items-center justify-between flex-wrap bg-pink-500 p-6">
<div className="flex items-center flex-shrink-0 text-white mr-6">
  <img src={prop.logo} alt='Logo' className='h-10' />
</div>
<div className="block lg:hidden">
  <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
  </button>
</div>
<div className="w-full block flex-grow lg:flex lg:w-auto">
  <div className="text-sm lg:flex lg:flex-grow lg:justify-center">
    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4 text-2xl font-bold">
      Home
    </a>
    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4 text-2xl font-bold">
      Product
    </a>
    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4 text-2xl font-bold">
      Promo
    </a>
    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4 text-2xl font-bold">
      About
    </a>
    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4 text-2xl font-bold">
      Contact
    </a>
  </div>
  <div>
    <a href="#" className="inline-block text-sm px-4 py-2 leading-none text-white border-white hover:text-gray-300 mt-4 lg:mt-0"><i className='fas fa-search'></i></a>
  </div>
</div>
</nav>
    </div>


  )

}

export default Navbar;
