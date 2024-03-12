import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import MegaMenu from '../../components/megaMenu/MegaMenu';

import PreviousEvent from '../../components/previouEvents/PreviousEvent';
import Accordian from '../../components/accordian/Accordian';

const Events = () => {

  return (
    <>
    <div>
    <Navbar/>
    </div>

    <div>
    <MegaMenu/>
    </div>
 
  
       <PreviousEvent/>
      <Accordian/>

    </>
  )
}


export default Events;
