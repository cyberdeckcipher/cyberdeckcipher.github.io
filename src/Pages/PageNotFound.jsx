import React from 'react';
import styles from '../Styles/Pages.module.css';
import SadGuy from '../Images/SadGuy/SadGuy.gif';

const PageNotFound = () => {
    return (
        <div className={styles.SingleColumn}>
            <img src={SadGuy} alt='404 Page not found' />
            <h1> 404 Page not found </h1>
        </div>
    )
}

export default PageNotFound;