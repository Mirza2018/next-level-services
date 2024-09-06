"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
const Navber = () => {
  const pathName=usePathname()
  const [items, setItems] = useState([]);

  useEffect(()=>{
              const buy=JSON.parse(localStorage.getItem("nextorderDetails"))
              setItems(buy)
  },[])
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


<div className='bg-base-100 '>
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



      {/* <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li> */}
    </ul>
  </div>
  <div className="navbar-end">
    <Link href='/cart' className="btn">Cart +{items?.length}</Link>
  </div>
</div>
      </div>
 
    );
};

export default Navber;