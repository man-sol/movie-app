import { useState } from 'react'
// import './App.css'
import Navbar from './Components/Navbar'
import MovieList from './Components/MovieList'
import UserContextProvider from './context/UserContextProvider'
import MovieInfo from './Components/MovieInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <Navbar/>
    <MovieInfo/>
    <MovieList/>
    </UserContextProvider>
    
  )
}

export default App
