import React from 'react'
import './App.css'
const Navbar = ({showcompanieshandler,showallcompanieshanlder,showhomehandler}) => {
  return (
    <div className='navbar'>
        <div className="nav-section">
            <ul>
                <li onClick={showhomehandler}>Home</li>
               
                <li onClick={showcompanieshandler}>Add Company</li>
                <li onClick={showallcompanieshanlder}>Companies</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar