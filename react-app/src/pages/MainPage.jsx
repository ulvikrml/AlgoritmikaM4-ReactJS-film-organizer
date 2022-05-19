import React from 'react'
import Movies from '../components/Movies';
import Favorities from '../components/Favorities';
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