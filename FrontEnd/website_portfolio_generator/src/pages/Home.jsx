import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Home() {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='start-button-container'>
                    <Link to={"/user/user-form"}> <Button variant='contained' color='info'>Start Creating Portfolio</Button></Link>
                </div>
                {/* <div className='card'>
                    <div className='card-body'> Desing your portfolio1 </div>
                    <div className='card-footer'> Desing your portfolio1 footera </div>
                </div>
                <div className='card'>
                    <div className='card-body'>Desing your portfolio3 </div>
                    <div className='card-footer'> Desing your portfolio3 Footer </div>
                </div>
                <div className='card'>
                    <div className='card-body'>Desing your portfolio3 </div>
                    <div className='card-footer'>Desing your portfolio3 footer </div>
                </div>
                <div className='card'>
                    <div className='card-body'>Desing your portfolio4 </div>
                    <div className='card-footer'>Desing your portfolio4 footer </div>
                </div> */}
            </div>
        </>
    )
}

export default Home