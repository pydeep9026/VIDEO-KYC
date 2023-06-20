import React, { useState } from 'react'
import './navmenu.css'

function Navmenu({ handleOptionChange }) {

    const [selectedOption, setSelectedOption] = useState('Dashboard');

    
    const handleOptionClick = (option) => {
        handleOptionChange(option);
        setSelectedOption(option);
      };

  return (
    <div className='navmenucontainer'>
    <h2 className="feature-header"> Admin Panel/Control Center</h2>
          <p className="feature-sub-header">Centralized Control system for gatividhi TransSolutions private limited</p>
      <nav>
  <ul>
    <li
      className={selectedOption === 'Dashboard' ? 'selected' : ''}
      onClick={() => handleOptionClick('Dashboard')}
    >
      <a  >Dashboard</a>
    </li>
    <li
    onClick={() => handleOptionClick('Enquiries')}
      className={selectedOption === 'Enquiries' ? 'selected' : ''}
    >
      <a  >Enquiries</a>
    </li>
    <li
    onClick={() => handleOptionClick('Messages')}
      className={selectedOption === 'Messages' ? 'selected' : ''}
    >
      <a>Messages</a>
    </li>
    </ul>
    <ul>
    <li
    onClick={() => handleOptionClick('Payments')}
      className={selectedOption === 'Payments' ? 'selected' : ''}
    >
      <a>Payments</a>
    </li>
    <li
    onClick={() => handleOptionClick('Consignments')}
      className={selectedOption === 'Consignments' ? 'selected' : ''}
    >
      <a>Consignments</a>
    </li>
    <li
    onClick={() => handleOptionClick('Addconsignment')}
      className={selectedOption === 'Addconsignment' ? 'selected' : ''}
    >
      <a>Add Consignment</a>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Navmenu