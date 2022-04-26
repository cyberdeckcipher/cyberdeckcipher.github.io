import React from 'react';
import RotatingCube from '../Components/RotatingCube/RotatingCube';
import pageStyle from '../Styles/Pages.module.css';
import NotFound from '../Images/Robot/NotFound.png';

const Home = () => {
    return (
        <>
            <RotatingCube/>
            <div className={pageStyle.RightHalf}><img src={NotFound} alt='404 Page not found' /></div>
        </>
    )
}

export default Home;