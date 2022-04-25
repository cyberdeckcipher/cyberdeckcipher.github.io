import React from 'react';
import RotatingCube from '../Components/RotatingCube/RotatingCube';
import pageStyle from '../Styles/Pages.module.css';
import SadGuy from '../Images/SadGuy/SadGuy.gif';

const Home = () => {
    return (
        <>
            <RotatingCube/>
            <div className={pageStyle.RightHalf}><img src={SadGuy} alt='404 Page not found' /></div>
        </>
    )
}

export default Home;