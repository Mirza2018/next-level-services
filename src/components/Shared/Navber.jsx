"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillCloseCircle, AiTwotoneShopping } from "react-icons/ai";
import React, { useEffect, useRef, useState } from 'react';
import MyCart from '../MyCart/MyCart';
const Navber = () => {
  const pathName=usePathname()
  const [items, setItems] = useState([]);

  useEffect(()=>{
              const buy=JSON.parse(localStorage.getItem("nextorderDetails"))
              setItems(buy)
  },[])


  const toggleCart=()=>{
if (ref.current.classList.contains('translate-x-full')){
  ref.current.classList.remove('translate-x-full')
  ref.current.classList.add('translate-x-0')
}
else if (! ref.current.classList.contains('translate-x-full')){
  ref.current.classList.remove('translate-x-0')
  ref.current.classList.add('translate-x-full')
}

  }
const ref=useRef()



  const menuItems=[
    {
      title:"Home",
      path:"/"
    },
    {
      title:"Services",
      path:"/services"
    },
    {
      title:"About",
      path:"/about"
    },
  ]
    return (


<div className='bg-base-100 sticky top-0 z-10'>
  <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

{
  menuItems.map(menu=>
  <Link className={`${pathName===menu?.path && "text-orange-500"}`} href={menu.path} key={menu.title}>
    <li className='p-5 text-base font-semibold uppercase hover:border-orange-500'>
      {menu.title}
    </li>

  </Link>)
}
      </ul>
    </div>
    <Link href='/' > <Image priority src='/logo.png' height={70}  width={70} alt='next-level-services' />  </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

    {
  menuItems.map(menu=>
  <Link className={`${pathName===menu?.path && "text-orange-500"}`} href={menu.path} key={menu.title}>
    <li className='p-2 mx-3 text-base font-semibold uppercase hover:rounded-lg hover:border-orange-500 hover:border-2'>
      {menu.title}
    </li>

  </Link>)
}


    </ul>
  </div>
  <div className="navbar-end">
    <div  onClick={toggleCart}  >
     <span className="relative inline-flex">
    <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150  ring-1 ring-slate-900/10 dark:ring-slate-200/20" >
       <AiTwotoneShopping className='text-xl  '/>
    </button>
    {
      items?.length >0 && <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
    }</span></div>
  </div>

<div ref={ref} className='sideCart  flex  absolute -top-6 right-0  p-1 translate transition-transform translate-x-full z-10 bg-transparent '>
        <div className=''>
            <span onClick={toggleCart} className="absolute top-12 right-4 cursor-pointer text-2xl z-10">
              <AiFillCloseCircle/>
            </span>
          <MyCart/>
      </div>

</div>
</div>

</div>

 
    );
};

export default Navber;