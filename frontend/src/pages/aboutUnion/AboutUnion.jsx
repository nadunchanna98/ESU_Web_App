import React from 'react'
import AboutUnionSection01 from './sections/aboutUnion_section_01/AboutUnion_section_01';
import AboutUnionSection02 from './sections/aboutUnion_section_02/AboutUnion_section_02';

import Navbar from '../../components/navbar/Navbar'
import MegaMenu from '../../components/megaMenu/Megamenu'
import Footer from '../../components/footer/Footer'
import Table from '../../components/table/Table';

const AboutUnion = () => {
  return (
    <div>
      <Navbar/>
      <MegaMenu/>
      <AboutUnionSection01/>
      <AboutUnionSection02/>
      <Table/>
      <Footer/>
    </div>
  )
}

export default AboutUnion;
