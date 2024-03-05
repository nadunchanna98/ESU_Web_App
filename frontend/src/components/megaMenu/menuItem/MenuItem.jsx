import React from 'react'
import DropdownContent from '../dropdownContent/DropdownContent'

import './menuItem.css'

const MenuItem = ({label , children}) => {
  return (
    <li className='a'>
        <div className='nav_item_content'>
            <h4 className='lato-regular label__container'>{label}</h4>  
        </div>

        {children && <div className='dropdown' >
        <DropdownContent submenuscontent={children} />
               
        </div>}
    </li>
  )
}

export default MenuItem
