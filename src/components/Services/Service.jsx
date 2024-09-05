import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Service = ({service}) => {
    const {name,image,price,_id}=service
    // console.log(name);

    
    return (
        <div  className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <Image placeholder='blur' blurDataURL={image} loading="lazy" style={{ aspectRatio: 3/2 }}  className='object-contain' src={image} alt={name} width={400} height={400}   />
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" /> */}
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
</div>
    );
};

export default Service;