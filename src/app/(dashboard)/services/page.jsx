import CategorySection from '@/components/Services/CategorySection/CategorySection';
import Services from '@/components/Services/Services';
import React from 'react';

const ServicesPage =() => {

    return (
      <div>
     
<div className='flex  justify-center'>
  <div className='hidden sm:block' >
    <CategorySection/>
  </div>
         

         <Services ></Services>
</div>


      </div>
    );
};

export default ServicesPage;