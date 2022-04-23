import React from 'react';
import styles from '../Styles/Pages.module.css';
import UnderConstructionGIF from '../Images/Robot/UnderConstructionGIF.gif';

const WIP = () => {
    return (
        <div className={styles.SingleColumn}>
            <img src={UnderConstructionGIF} alt='Work in progress page' />
            <p>This page is under construction.</p>
        </div>
    )
}

export default WIP;