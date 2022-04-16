import React from 'react';
import RotatingCube from '../Components/RotatingCube/RotatingCube';

const Home = () => {
    return (
        <div>
            <div className='CubeContainer' id='HomeCubeContainer'>
                <RotatingCube/>
            </div>
            <div><span>Home page.</span></div>
        </div>
    )
}

export default Home;