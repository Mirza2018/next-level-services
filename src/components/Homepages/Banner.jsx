import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
<div className="carousel w-full ">

  <div id="slide1" className="carousel-item relative w-full">


<Image
    alt='slide'
    width={2500}
    height={1500}

      src="https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-1.jpg"
      className="w-full" />


<Image
    alt='slide'
    width={2500}
    height={1500}

      src="https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-6.jpg"
      className="w-full" />


    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
   
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

  
</div>
    );
};

export default Banner;

const slideData=[
  {
    imag:"http://websmirno.site/viktor/plumbio/images/mainslide-01__img.webp",
    pre:"",
    next:""
  },
  {
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-1.jpg",
    pre:"",
    next:""
  },
  {
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-2.jpg",
    pre:"",
    next:""
  },
  {
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-3.jpg",
    pre:"",
    next:""
  },
  {
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-6.jpg",
    pre:"",
    next:""
  },
  {
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-6.jpg",
    pre:"",
    next:""
  },
  {
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-6.jpg",
    pre:"",
    next:""
  },
  {
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-6.jpg",
    pre:"",
    next:""
  },
  {
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-6.jpg",
    pre:"",
    next:""
  },
]