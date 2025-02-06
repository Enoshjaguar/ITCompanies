import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_PATH } from '../data/apipath'

const AllCompanies = () => {
    const [companies,setCompanies] = useState([])
    const [selectedcompany,setSelectedCompany] = useState(null)
    const getallcompanies = async()=>{
        try {
            const response = await axios.get(`${API_PATH}/company/allcompanies`)

            if(response.status===200){
                console.log("all compannies fetched successfully",response.data.allcompanies)
                
                setCompanies(response.data.allcompanies)
                console.log("this is file",companies.file)
            }
        } catch (error) {
            console.error(error)
            alert("fetching failed")
            
        }

    }
    useEffect(()=>{
        getallcompanies()
    },[])
  return (
    <div className='allcompanies'>
      {selectedcompany ? (
        <div className="company-details">
            <img src={selectedcompany.file} alt="no img found" />
            <h1>{selectedcompany.companyname}</h1>
            <h2>Category : {selectedcompany.category}</h2>
            <h3>Headquarters : {selectedcompany.headquarters}</h3>
            <h3>CEO : {selectedcompany.ceo}</h3>
           
            <button onClick={()=>setSelectedCompany(null)}>Back</button>
        </div>
      ):(
        companies.length>0?(
            companies.map((company,index)=>(
                <div className="item" key={index} onClick={()=>setSelectedCompany(company)}>
                    <h1>{company.companyname}</h1>
                    <h2>{company.ceo}</h2>
                    
                    <img src={company.file} alt="" />
                </div>
            ))
        )
      :(
        <p>No companies available</p>
      )
        
      )}
       
    </div>
  )
}

export default AllCompanies