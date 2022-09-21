import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
        <div className='text-center'>
            <h1>Welcome to Chatscrum, Jaypee</h1>
            <p>We are glad to have you here</p>
            <div>
                <Link to={'/sign-in'}>
                <button className='border-0 mx-2 bg-dark rounded text-light px-3 py-2'>Sign In</button>
                </Link>
                <Link to={'/sign-up'}>
                <button className='border-0 mx-2 bg-dark rounded text-light px-3 py-2'>Sign Up</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home