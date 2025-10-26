import React from 'react'
import SEOMetaTags, { pageConfigs } from '../SEOMetaTags';
import { OrganizationSchema, WebsiteSchema, EducationalOrganizationSchema } from '../StructuredData';
import FirstPage from './LandingPage/FirstPage';
import SecondPage from './LandingPage/SecondPage';
import Courses from './LandingPage/Courses';
import OurMission from './LandingPage/OurMission';
import OurPartners from './LandingPage/OurPartners';
import Testimonials from './LandingPage/Testimonials';
import Team from './LandingPage/Team';
import OurGallery from './LandingPage/OurGallery';
import JoinUs from './LandingPage/JoinUs';

const Home = () => {
  return (
    <div>
      <SEOMetaTags {...pageConfigs.home} />
      <OrganizationSchema />
      <WebsiteSchema />
      <EducationalOrganizationSchema />
      <FirstPage/>
      <SecondPage/>
      <OurGallery/>
      <Courses/>
      {/* <Testimonials/> */}
      <OurMission/>
      {/* <OurPartners/> */}
      <Team/>
      <JoinUs/>
    </div>
  )
}

export default Home