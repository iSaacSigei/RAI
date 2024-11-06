import React from 'react'
import FirstPage from './LandingPage/FirstPage';
import SecondPage from './LandingPage/SecondPage';
import Courses from './LandingPage/Courses';
import OurMission from './LandingPage/OurMission';
const Home = () => {
  return (
    <div>
      <FirstPage/>
      <SecondPage/>
      <OurGallery/>
      <Courses/>
      <OurMission/>
    </div>
  )
}

export default Home