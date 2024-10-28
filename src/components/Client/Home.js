import React from 'react'
import FirstPage from './LandingPage/FirstPage';
import SecondPage from './LandingPage/SecondPage';
import Courses from './LandingPage/Courses';
import OurMission from './LandingPage/OurMission';
import OurPartners from './LandingPage/OurPartners';
const Home = () => {
  return (
    <div>
      <FirstPage/>
      <SecondPage/>
      <Courses/>
      <OurMission/>
      <OurPartners/>
    </div>
  )
}

export default Home