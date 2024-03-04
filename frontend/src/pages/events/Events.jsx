import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import MegaMenu from '../../components/megaMenu/MegaMenu';
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
      <div>
       <Accordian/>
      </div>
    </>
  );
}

export default Events;
