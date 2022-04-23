import React from 'react';
import RotatingCube from '../Components/RotatingCube/RotatingCube';
import './temp.css';

const Home = () => {
    return (
        <>
            <RotatingCube/>
            <div className='temp'><span>Home page.</span></div>
        </>
    )
}

export default Home;