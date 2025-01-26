import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {

    const [searchQuery, setSearchQuery] = useState("")
    const [data, setData] = useState([])
    const [movieId, setMovieId] = useState()
    const [movieIdData, setMovieIdData] = useState()
    const [movieInfoData, setMovieInfoData] = useState()
      const [isVisible, setIsVisible] = useState(false)
    


  return (
    <UserContext.Provider value={{data,  setData , searchQuery, setSearchQuery, movieId, setMovieId, movieIdData, setMovieIdData, movieInfoData, setMovieInfoData,isVisible, setIsVisible}}>
        {children}
    </UserContext.Provider>

    
  )
}

export default UserContextProvider