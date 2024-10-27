import React from 'react'
import FirstPage from './LandingPage/FirstPage';
import SecondPage from './LandingPage/SecondPage';
import Courses from './LandingPage/Courses';
import OurMission from './LandingPage/OurMission';
import Testimonials from './LandingPage/Testimonials';
import Team from './LandingPage/Team';

const Home = () => {
  return (
    <div>
      <FirstPage/>
      <SecondPage/>
      <Courses/>
      <Testimonials/>
      <OurMission/>
      <Team/>
    </div>
  )
}

export default Home