import React from 'react';
import styles from '../Styles/Pages.module.css';
import NotFoundRobot from '../Images/Robot/NotFoundRobot.png';

const NotFound = () => {
    return (
        <div className={styles.SingleColumn}>
            <img src={NotFoundRobot} alt='404 Page not found' />
            <h1> 404 not found </h1>
        </div>
    )
}

export default NotFound;