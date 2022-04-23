import React from 'react';
import styles from '../Styles/Pages.module.css';
import NotFoundImage from '../Images/Robot/404Robot.png';

const NotFound = () => {
    return (
        <div className={styles.SingleColumn}>
            <img src={NotFoundImage} alt='404 Page not found' />
            <h1> 404 not found </h1>
        </div>
    )
}

export default NotFound;