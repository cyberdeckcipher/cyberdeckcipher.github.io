import React from 'react';
import styles    from '../Styles/App.module.css';
import UnderConstructionGIF from '../Images/Robot/UnderConstructionGIF.gif';

const WIP = () => {
    return (
        <div className={styles.WIP}>
            <img src={UnderConstructionGIF} alt='Work in progress page' />
            <p>This page is under construction.</p>
        </div>
    )
}

export default WIP;