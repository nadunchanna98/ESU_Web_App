import React from 'react'
import { megaMenuData } from '../../constants/megaMenuData';
import MenuItem from './menuItem/MenuItem';
import './megaMenu.css'


const Megamenu = () => {
  return (
    <div className='megamenu__mainContainer'>
    <div className=' custom__container nav__container'>

     <nav >
       <ul className='mega__menu'>
       {megaMenuData.map(({label , children} , index) => (
         <MenuItem key={index}  label = {label}  children = {children} />
       ))}
       </ul>
     </nav>
   
    </div>
 </div>
  )
}

export default Megamenu
