"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const MyCart = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
                const buy=JSON.parse(localStorage.getItem("nextorderDetails"))
                setItems(buy)
    },[])
  
    console.log(items);

    
    
    

    return (
        <section className="py-24 relative bg-white">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            
                <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
                </h2>



{
    items?.map((item,index)=>
          <div key={index} className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 shadow-2xl hover:duration-300 hover:scale-105">
                    <div className="col-span-12 lg:col-span-2 img box">
                        <Image src="https://pagedone.io/asset/uploads/1701162839.png" alt="speaker image" className="max-lg:w-full lg:w-[180px] rounded-lg" priority  width={180}  height={180}  />
                    </div>
                    <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                        <div className="flex items-center justify-between w-full mb-4">
                            <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">{item?.service?.name}</h5>
                           
                        </div>
                        <div className="font-normal  leading-7 text-black mb-6 ">
                            <p><span className='font-bold'>Name: </span> {item?.name}</p>
                            <p><span className='font-bold'>Address: </span> {item.address}</p>
                            <p><span className='font-bold'>Date & Time: </span> {item?.date.split("T")[0]} at {item?.date.split("T")[1]}</p>
                            <p><span className='font-bold'>Mobile: </span> {item?.mobile}</p>
                        </div>
                        <div className="flex justify-end items-center">
                            <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">${item?.service?.price}</h6>
                        </div>
                    </div>
                </div>
    )
}

              

             
                
            
        </div>
       
        
    </section>
    );
};

export default MyCart;