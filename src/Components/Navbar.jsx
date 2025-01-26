import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
const API_KEY = "7ea0b3e1"
import axios from 'axios'

const Navbar = () => {

    const {searchQuery, setSearchQuery} = useContext(UserContext)
    const {data, setData} = useContext(UserContext)

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }


    

    const fetchData = async() => {
      try{

        const response = await axios.get( `http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`)
        
        const res = response.data.Search
        setData(res)
        console.log(data)
      }
        catch(error){
          console.log("error")
        }
      }

      useEffect(() => {

      fetchData()
  },[])

  
 

  return (
    <div className='h-16 bg-black flex justify-between items-center border-2 rounded-2xl m-1  border-green-600'>

        <img src='https://as1.ftcdn.net/v2/jpg/05/90/75/40/1000_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg' className='h-10 rounded-lg m-6' alt='logo'/>
        

        <div className='flex items-center space-x-3 m-6'>


        <input className='bg-black border-green-600 border  h-10 w-96 rounded-lg text-white p-3 mr-0'
        placeholder='Enter Movie name..'
        type='text'
        value={searchQuery}
        onChange={handleChange}
        />
        <button className='bg-green-600 t h-10 mx-0 p-2 rounded-xl'
        onClick={fetchData}
        >Search</button>
        
        </div>
        
        
    </div>
  )
}

export default Navbar