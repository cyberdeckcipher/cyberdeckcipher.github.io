import React from 'react';
import styles from '../../Styles/App.module.css';
import Home from '../../Pages/Home';

export default function AppContent(){
    return (
        <div className={styles.AppContainer}>
            <Home />
        </div>
    )
}