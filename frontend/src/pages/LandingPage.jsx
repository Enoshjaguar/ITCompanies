import React, { useState } from 'react'
import Navbar from '../Navbar'
import Homepage from '../Homepage'
import Companies from '../Companies'
import AllCompanies from '../AllCompanies'

const LandingPage = () => {
  const [showcompanies,setShowCompanies] = useState(false)
  const [showhome,setShowHome] = useState(true)
  const [showallcompanies,setShowAllCompanies] = useState(false)

  const showcompanieshandler = ()=>{
    setShowCompanies(true)
    setShowAllCompanies(false)
    setShowHome(false)
  }

  const showallcompanieshanlder = ()=>{
    setShowCompanies(false)
    setShowAllCompanies(true)
    setShowHome(false)

  }

  const showhomehandler = ()=>{
    setShowCompanies(false)
    setShowAllCompanies(false)
    setShowHome(true)
  }

  return (
    <div>
      <Navbar showcompanieshandler={showcompanieshandler}
      showallcompanieshanlder = {showallcompanieshanlder}
      showhomehandler = {showhomehandler}
      />
      {showhome && <Homepage showcompanieshandler={showcompanieshandler}/>}
      {showcompanies && <Companies/>}
      {showallcompanies && <AllCompanies/>}
    </div>
  )
}

export default LandingPage