import React from 'react'
import { members } from '../../constants/members'
import NameCard from './nameCard/NameCard';
import './table.css'

const Table = () => {
  return (
    <div className='table__mainconainer'>
    <div className='custom__container table__container'>
    <div className='committee__table-wrapper'>
        <table className='committee__table'>
            <thead>
                <tr className='lato-bold'>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Batch</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody className='table_body'>
            {members.map((member, index) => (
          <tr key={index} className='lato-regular'>
            <td>
              <NameCard
                fullName={member.name.fullName}
                email={member.name.email}
                profilePicture={member.name.profilePicture}
              />
            </td>
            <td>{member.position}</td>
            <td>{member.batch}</td>
            <td>{member.description}</td>
          </tr>
        ))}


            </tbody>
        </table>
        </div>
      
    </div>
    </div>
  )
}

export default Table
