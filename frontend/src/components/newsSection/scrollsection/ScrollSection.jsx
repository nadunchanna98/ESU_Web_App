import React from 'react'
import NewsCard from './newsCard/NewsCard'
import {newsData} from '../../../constants/news'
import {Link} from 'react-router-dom'
import './scrollSection.css'

const ScrollSection = () => {
  return (
    <div className='ScrollSection__mainContainer'>
      {
          newsData.map((news, index) =>( 
            <Link>
            <NewsCard key={index} image={news.image} title={news.title} description={news.description} />  
            </Link>
          ))
      }
 
    </div>
  )
}

export default ScrollSection
