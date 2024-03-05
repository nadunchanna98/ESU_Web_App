import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Megamenu from '../../components/megaMenu/Megamenu';
import Herosetion from '../../components/heroSection/Herosetion';
import PreviousEvent from '../../components/previouEvents/PreviousEvent';



const Home = () => {
  return (
    <>
    <div>
    <Navbar/>
    </div>

    <div>
    <Megamenu/>
    </div>
 
       <Herosetion/>
       <PreviousEvent/>

    </>
  )
}

export default Home;
