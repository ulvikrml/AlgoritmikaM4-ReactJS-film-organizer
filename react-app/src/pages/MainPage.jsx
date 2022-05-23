import React from 'react'
import Movies from '../components/movies/Movies';
import Favorities from '../components/favorities/Favorities';
import './MainPage.css'

const MainPage = () => {
  
  return (
    <div className='main'>
        <Movies/>
        <Favorities/>
    </div>
  )
}

export default MainPage;