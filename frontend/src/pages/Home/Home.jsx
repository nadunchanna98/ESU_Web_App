import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import MegaMenu from '../../components/megaMenu/MegaMenu';
import Herosetion from '../../components/heroSection/Herosetion';
import PreviousEvent from '../../components/previouEvents/PreviousEvent';
import NewsSection from '../../components/newsSection/NewsSection';
import MissionVisionSec from '../../components/MissionVisionSec/MissionVisionSec';
import StudentsAchievSec from '../../../src/components/StudentsAchievementSec/StudentAchievementSec';
import UpcomingEventCard from '../../components/upcommingEvents/upcommingEventCard/UpcomingEventCard';

const Home = () => {
  return (
    <>
    <div>
    <Navbar/>
    </div>

    <div>
    <MegaMenu/>
    </div>
 
       <Herosetion/>
       <NewsSection/>
       <MissionVisionSec/>
       <PreviousEvent/>
       <StudentsAchievSec/>
       <UpcomingEventCard/>

    </>
  )
}

export default Home;
