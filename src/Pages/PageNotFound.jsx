import React from 'react';
import styles from '../Styles/Pages.module.css';
import NotFound from '../Images/Robot/NotFound.gif';

const PageNotFound = () => {
    return (
        <div className={styles.SingleColumn}>
            <img src={NotFound} alt='404 Page not found' />
            <h1> 404 Page not found </h1>
        </div>
    )
}

export default PageNotFound;