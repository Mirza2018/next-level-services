"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillCloseCircle, AiTwotoneShopping } from "react-icons/ai";
import React, { useEffect,  useState } from 'react';
import MyCart from '../MyCart/MyCart';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const Navber = () => {
  const pathName=usePathname()
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(false);

  useEffect(()=>{
              const buy=JSON.parse(localStorage.getItem("nextorderDetails"))
              setItems(buy)
  },[])

console.log(cart);






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
      title:"Blogs",
      path:"/blogs"
    },
    {
      title:"About",
      path:"/about"
    },
  ]
    return (


<div className='bg-white sticky top-0 z-10 text-black '>
  <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0}  className=" lg:hidden cursor-pointer">
        {
          open?  <RxCross1   onClick={()=>setOpen(!open)}  className='text-2xl me-8 font-bold' />  : <GiHamburgerMenu onClick={()=>setOpen(!open)} className='text-2xl me-8 ' />
        }
      
     

      </div>


{
  open  ?  <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-8 w-52 p-2 shadow">

{
  menuItems.map(menu=>
  <Link className={`${pathName===menu?.path && "text-sky-500"}`} href={menu.path} key={menu.title}>
    <li className='p-2 mx-3 text-base font-bold uppercase  hover:underline hover:decoration-sky-500 hover:decoration-2 hover:underline-offset-8'>
      {menu.title}
    </li>

  </Link>)
}
      </ul>

      :
      <></>
}
     




    </div>
    <div className='w-20'>
    <Link href='/' > <Image  placeholder='blur' blurDataURL='/logo.png' priority src='/logo.png' height={300}  width={300} alt='next-level-services' />  </Link></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

    {
  menuItems.map(menu=>
  <Link className={`${pathName===menu?.path && "text-sky-500"}`} href={menu.path} key={menu.title}>
    <li className='p-2 mx-3 text-base font-bold uppercase  hover:underline hover:decoration-sky-500 hover:decoration-2 hover:underline-offset-8'>
      {menu.title}
    </li>

  </Link>)
}


    </ul>
  </div>
  <div className="navbar-end">
    <div  onClick={()=>setCart(!cart)}  >
     <span className="relative inline-flex">
    <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white shadow-md transition ease-in-out duration-150  ring-1 ring-slate-900/10 dark:ring-slate-200/20" >
       <AiTwotoneShopping className='text-xl '/>
    </button>
    {
      items?.length >0 && <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
    }</span></div>
  </div>
{
  cart &&  <div className='sideCart  flex  absolute -top-6 right-0  p-1  z-10 bg-transparent '>
        <div className=''>
            <span onClick={()=>setCart(!cart)} className="absolute top-12 right-4 cursor-pointer text-2xl z-10">
              <AiFillCloseCircle/>
            </span>
          <MyCart/>
      </div>

</div>

}


</div>

</div>

 
    );
};

export default Navber;