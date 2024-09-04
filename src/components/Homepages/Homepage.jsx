import React from 'react';
import Banner from './Banner';
import CustomerSpuport from './CustomerSpuport';
import CeoSection from './CeoSection';
import OurTeam from '../AboutUS/OurTeam';

const Homepage = () => {
    return (
        <div>
            
           <Banner/>
           <CustomerSpuport></CustomerSpuport>
           <CeoSection/>
           <OurTeam/>
        </div>
    );
};

export default Homepage;