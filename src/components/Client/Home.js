import React from 'react'
import FirstPage from './LandingPage/FirstPage';
import SecondPage from './LandingPage/SecondPage';
import Courses from './LandingPage/Courses';
import OurMission from './LandingPage/OurMission';
import OurPartners from './LandingPage/OurPartners';
import Testimonials from './LandingPage/Testimonials';
import Team from './LandingPage/Team';
import OurGallery from './LandingPage/OurGallery';
import JoinUs from './LandingPage/JoinUs';
import SEO from '../SEO';
const Home = () => {
  return (
    <div>
      <SEO
        title="RAI Alliance | Responsible AI for All"
        description="RAI Alliance advocates for responsible AI. Explore ethical AI courses, resources, events, and community programs."
        path="/"
        keywords="RAI, RAI Alliance, Responsible AI, AI ethics, AI courses, responsible AI courses, trustworthy AI, ethical AI"
        type="website"
        breadcrumbs={[{ name: 'Home', path: '/' }]}
      />
      <FirstPage/>
      <SecondPage/>
      <OurGallery/>
      <Courses/>
      <Testimonials/>
      <OurMission/>
      <OurPartners/>
      <Team/>
      <JoinUs/>
    </div>
  )
}

export default Home
