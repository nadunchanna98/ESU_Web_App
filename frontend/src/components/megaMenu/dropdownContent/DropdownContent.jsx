import React from 'react';
import { Link } from 'react-router-dom';
import './dropdownContent.css'

const DropdownContent = ({ submenuscontent }) => {
  return (
    <div className="dropdown_content" >
      {submenuscontent.map((item, index) => (

        <Link className='lato-regular label-text'>{item.label}</Link>

      ))}
    </div>
  );
};

export default DropdownContent
