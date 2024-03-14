import React from 'react'
import AboutUnion_section_01 from './sections/aboutUnion_section_01/AboutUnion_section_01';
import AboutUnion_section_02 from './sections/aboutUnion_section_02/AboutUnion_section_02';

import Navbar from '../../components/navbar/Navbar'
import MegaMenu from '../../components/megaMenu/Megamenu'
import Footer from '../../components/footer/Footer'

const AboutUnion = () => {
  return (
    <div>
      <Navbar/>
      <MegaMenu/>
      <AboutUnion_section_01/>
      <AboutUnion_section_02/>
      <Footer/>
      
    </div>
  )
}

export default AboutUnion;
