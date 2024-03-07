import React from 'react';
import './mainNews.css';
import BackgroundImage from 'react-background-image';
import mainnews from '../../../images/mainnews.jpg';
import { Link } from 'react-router-dom';

const MainNews = () => {
  return (
    <div className='mainNews__container'>
      
        <Link>
        <div className='link__container'>
          <h2 className='lato-bold'>Faculty Of Engineering is Celebrating 10th Annivasary</h2>
        </div>
        
        </Link>
       
    </div>
  );
};

export default MainNews;
