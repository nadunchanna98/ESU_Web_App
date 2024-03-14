import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Megamenu from '../../components/megaMenu/Megamenu';
import Herosetion from '../../components/heroSection/Herosetion';
import PreviousEvent from '../../components/previouEvents/PreviousEvent';
import NewsSection from '../../components/newsSection/NewsSection';
import Footer from '../../components/footer/Footer';



const Home = () => {
  return (
    <>
       <Navbar/>
       <Megamenu/>
       <Herosetion/>
       <NewsSection/>
       <PreviousEvent/>
       <Footer/>
    </>
  )
}

export default Home;
