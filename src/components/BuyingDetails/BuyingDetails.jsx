import { Getservices } from '@/Api/Api';
import Image from 'next/image';
import React from 'react';
import { IoStar } from "react-icons/io5";
const BuyingDetails =async ({params}) => {
    console.log(params);
    const services= await Getservices();
  
    const service=services.find(s=>s._id===params.id)


    
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            {/* <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p> */}

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
      {/* <div
        className="bg-gray-200 dark:bg-neutral-700 rounded-md w-10 animate-pulse ms-3"
      >price</div> */}
    </div>
  </div>
  <div className="flex flex-row justify-between w-full">
    <div
      className="w-40 animate-pulse"
    ></div>

  
  </div>

  {/* <div
    className="bg-gray-200 dark:bg-neutral-700 rounded-md w-full h-20 animate-pulse"
  >


  </div> */}
</div>



          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Buy</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default BuyingDetails;