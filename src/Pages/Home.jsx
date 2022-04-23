import React from 'react';
import RotatingCube from '../Components/RotatingCube/RotatingCube';
import pageStyle from '../Styles/Pages.module.css';

const Home = () => {
    return (
        <>
            <RotatingCube/>
            <div className={pageStyle.RightHalf}><span>Home page.</span></div>
        </>
    )
}

export default Home;