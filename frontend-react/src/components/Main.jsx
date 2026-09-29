import React from 'react'
import Header from './header'
import Footer from './footer'
import Button from './button'
const Main = () => {
  return (
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className='text-light lead'>This stock price prediction contains the prediction of the real time stock sales it keeps all the detail related to the stock, Makes the work easy for the hunter to see the stock and to make prediction related to it, it guess which stock gonna be the higher in the market</p>
        <Button text= "Login" class="btn-outline-info"/>
      </div>
    </div>
  )
}

export default Main