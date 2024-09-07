import CeoSection from '@/components/AboutUS/CeoSection';
import JoinUsTeam from '@/components/AboutUS/JoinUsTeam';
import OurTeam from '@/components/AboutUS/OurTeam';
import TeamMembers from '@/components/AboutUS/TeamMembers';
import SelasNews from '@/components/Homepages/SelasNews';
import ServiceTakeCompany from '@/components/Homepages/ServiceTakeCompany';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <CeoSection/>
            {/* <OurTeam/> */}
            <TeamMembers/>
            {/* <SelasNews/> */}
            <JoinUsTeam/>
            <ServiceTakeCompany/>
        </div>
    );
};

export default AboutPage;