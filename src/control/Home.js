import React from 'react'
import './nav.css'
import'./home.css'
import { Link } from 'react-router-dom'
import photo from'../imag/1.webp'
import pic from'../imag/person.jpg'
import imag from'../imag/pie-chart.png'

const Home = () => {
  return (
    <>

<div className='nav'>
       <div className='profile'> 
       <img className='photo' src={photo} alt='profil'/>
       <span className='name'>lena</span>
       </div>
      <Link to='/home'>Home</Link>
      <Link to='/data'>Data</Link>
     
    </div>
         <div className='contener'>

         <div className='box1'>
         <span className='header'>Top Deals</span>
         
         

            <div className='user'>          
           <img className='pic' src={pic} alt=''/>
              <div className='data'>
              <span className='email'>Eva Magdy</span>
              <span className='email'>Eva233@gmail.com</span>
              </div>
           <span className='number'>$3.668</span>
         </div>

         <div className='user'>          
           <img className='pic' src={pic} alt=''/>
              <div className='data'>
              <span className='email'>Eva Magdy</span>
              <span className='email'>Eva233@gmail.com</span>
              </div>
           <span className='number'>$3.668</span>
         </div>

          
         <div className='user'>          
           <img className='pic' src={pic} alt=''/>
              <div className='data'>
              <span className='email'>Eva Magdy</span>
              <span className='email'>Eva233@gmail.com</span>
              </div>
           <span className='number'>$3.668</span>
         </div>

          
         <div className='user'>          
           <img className='pic' src={pic} alt=''/>
              <div className='data'>
              <span className='email'>Eva Magdy</span>
              <span className='email'>Eva233@gmail.com</span>
              </div>
           <span className='number'>$3.668</span>
         </div>

          
         <div className='user'>          
           <img className='pic' src={pic} alt=''/>
              <div className='data'>
              <span className='email'>Eva Magdy</span>
              <span className='email'>Eva233@gmail.com</span>
              </div>
           <span className='number'>$3.668</span>
         </div>

         </div>       
         


          <div className='box2'>
          <h1>Total visit</h1>
            <img  className="chart" src={imag} alt=''/>
            
          </div>
         
                
         
          </div>
          


       
    </>
  )
}

export default Home