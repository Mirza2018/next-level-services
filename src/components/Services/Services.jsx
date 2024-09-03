"use client"
// import { Getservices } from '@/Api/Api';
import React, { useEffect, useState } from 'react';
const Services = () => {
    // const services= Getservices()
    // console.log( services);
    const [services,setServices]=useState()
    useEffect(()=>{
   fetch('services.json')
.then((res)=>res.json())
.then((data)=>{
     setServices(data) 
})
    },[])
 console.log(services);
 


    
    return (
        <div>
            
        </div>
    );
};

export default Services;