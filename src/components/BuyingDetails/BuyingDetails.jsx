"use client"

import { Getservices } from '@/Api/Api';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoStar } from "react-icons/io5";
import BuyDataLoading from '../Loading/BuyDataLoading';
const BuyingDetails = ({params}) => {

  const [services, setServices] = useState([]);
      
  useEffect(() => {


    (async function fetchData  () {
      const result = await Getservices();
      setServices(result);
    }())
//  fetchData();
   
  }, []);

    // const services= await Getservices();
    const service=services.find(s=>s._id===params.id)

    const personData=(e)=>{
      e.preventDefault()
      const fromData= new FormData(e.target)
      const {name,email,date,address}=Object.fromEntries(fromData)
      

      const orderDetails={
        name,email,date,address,service:[service]
      }
if(localStorage.getItem("nextorderDetails")){
  console.log("okkok");
  
}
      localStorage.setItem("nextorderDetails", JSON.stringify(orderDetails));
      

    }


    
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">

       {
        service?
     <div
  className="flex flex-col gap-2 dark:text-white max-w-md w-full bg-white dark:bg-neutral-900 p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150"
>
  <div className="flex flex-row justify-between w-full">
    <div className="flex flex-row justify-between w-full">
    <Image src={service?.image} alt={service?.name} width={100} height={100}></Image>

      <div
        className="ms-3 flex justify-center items-center"
      >{service?.name}</div>
        <div className="text-xs">
      <div className="flex flex-row">
      <IoStar className='text-yellow-500' />
      <IoStar className='text-yellow-500' />
      <IoStar className='text-yellow-500' />
      <IoStar className='text-yellow-500' />
      <IoStar className='text-yellow-500' />

     
      </div>
      <div>{service?.price}&#65284;</div>
    </div>
    </div>
  </div>
  <div className="flex flex-row justify-between w-full">
    <div
      className="w-40 animate-pulse"
    ></div>

  
  </div>
</div>   
        :
      <BuyDataLoading/>
       }     



          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

            <form onSubmit={personData} className="card-body">


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="name" className="input input-bordered" required name="name" />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required name="email" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="datetime-local" placeholder="date" className="input input-bordered" required name="date" />
              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea type="" placeholder="Give your address" className="textarea textarea-bordered textarea-md" required name="address" />
              </div>







              <div className="form-control mt-6">
                <button disabled={!service} className="btn btn-primary hover:cursor-pointer">Order Service</button>
              </div>
            </form>
            



          </div>
        </div>
      </div>
    );
};

export default BuyingDetails;