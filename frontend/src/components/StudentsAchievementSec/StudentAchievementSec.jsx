
import React from 'react'
import './studentAchieveSec.css'
import AchievementCard from './card/AchievementCard';
const StudentAchievmentSec = () => {
    return (
        <div className='div2'>
          <div className='sec2 custom__container'>
          <h2 className='he'>Student's Achievements</h2>
             
           <AchievementCard/> 
           <div class="container">
  <button>Explore More</button>
</div>
          </div>
        </div>
      );
    };
    


export default StudentAchievmentSec