import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Service = ({service}) => {
    const {name,image,price,_id,category}=service
    // console.log(service);

    
    return (
      <div>

        {/* <div  className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <Image placeholder='blur' blurDataURL={image} loading="lazy" style={{ aspectRatio: 3/2 }}  className='object-contain' src={image} alt={name} width={400} height={400}   />
  </figure>
  <div className="card-body">
    <h2 className='text-pretty text-base font-medium'>Service Name:
        <span className='text-orange-500'> {name} </span>
        <span></span>
       
        </h2>
    
    <div className="card-actions justify-end">
      <p className='text-pretty text-base font-medium'> Price:{price}&#65284;</p>
      
      <Link href={`/services/${_id}`} className="btn bg-transparent text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white hover:scale-110">Book now</Link>
    </div>
  </div>
</div> */}


<div
  className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg  w-80 hover:shadow-xl bg-white"
>
  {/* <div
    className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 h-3/6 rounded-lg"
  ></div> */}
  <Image placeholder='blur' blurDataURL={image} loading="lazy" style={{ aspectRatio: 3/2 }}  className='object-contain' src={image} alt={name} width={400} height={400}   />

  <div className="px-5 pt-2 flex flex-col">
    <h2 className="font-semibold">{name} </h2>

    {/* <button
      className="bg-blue-500 cursor-pointer text-white px-2 py-1 mt-2 rounded-md transition duration-150 hover:bg-blue-700 mb-4"
      type="button"
    >
      Button
    </button> */}
    <Link href={`/services/${category}/${_id}`} className="btn bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white hover:scale-110  my-4">Book now</Link>
  </div>
</div>



</div>

    );
};

export default Service;