import React, { useState } from 'react'
import axios from 'axios'
import {API_PATH} from '../data/apipath'
const Companies = () => {

  const [companyname,setCompanyName] = useState('')
  const [category,setCategory] = useState('servicebased')
  const [headquarters,setHeadquarters] = useState('')
  const [ceo,setCeo] = useState('')
  const [file,setFile] = useState(null)

  const handleimagesubmit = (e)=>{
    setFile(e.target.files[0])
  }
  
  const resetall = ()=>{
    setCompanyName('')
    setCategory('service')
    setHeadquarters('')
    setCeo('')
    setFile(null)
  }
  const handlesubmit = async(e)=>{
    e.preventDefault()

    if(!companyname || !category || !headquarters || !ceo){
      alert("all fields are required")
      return
    }
    try {
      const formData = new FormData()
  formData.append('companyname',companyname)
  formData.append('category',category)
  formData.append('headquarters',headquarters)
  formData.append('ceo',ceo)
  if(file){
    formData.append('file',file)
  }
      const response = await axios.post(`${API_PATH}/company/addcompany`,formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })
     

      if(response.status===201){
        alert("company saved successfully")
        resetall()
      }
     
    } catch (error) {
      console.log("this is api path in error",API_PATH)
      console.error("error occured",error)
      alert("comapny saving failed")
      
    }
  }
  return (
    <div className="companies">
    <div className='companies-form'>
        <form action="" onSubmit={handlesubmit}>
          <label htmlFor="">Company Name : </label>
          <input type="text" placeholder='enter company name' value={companyname} onChange={(e)=>setCompanyName(e.target.value)}/><br /><br />
          <label htmlFor="">Category : </label>
          <select name="" value={category} id="category" onChange={(e)=>setCategory(e.target.value)}>
            
            <option value="servicebased">Service Based</option>
            <option value="productbased">Product Based</option>
          </select><br /><br />
          <label htmlFor="">Headquarters : </label>
          <input type="text" placeholder='enter city' value={headquarters} onChange={(e)=>setHeadquarters(e.target.value)}/><br /><br />
          <label htmlFor="">CEO : </label>
          <input type="text" placeholder='enter ceo name' value={ceo} onChange={(e)=>setCeo(e.target.value)}/><br /><br />
          <label htmlFor="">Image :</label>
          <input type="file"  onChange={handleimagesubmit}/><br /><br />
          <button  type='submit' className='add-button'>Add Company</button>
        </form>
    </div>
    </div>
  )
}

export default Companies