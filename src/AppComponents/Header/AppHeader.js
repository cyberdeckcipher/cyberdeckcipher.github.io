import React from "react";
import Button from "../../Components/Button/Button";
import styles from '../../Styles/App.module.css';
import './AppHeader.css';

const onClickProject = () => {
    console.log('Projects clicked.')
}

const onClickArt = () => {
    console.log('Art clicked.')
}

export default function AppHeader(){
    return (
        <div className={styles.AppHeader}>
            <div className='AppHeaderMenu'>
                <Button text = 'Projects' onclick = {onClickProject} />
                <Button text = 'Art'      onclick = {onClickArt}     />
            </div>
            <div className='AppHeaderBreadcrumb'>
                <p> ulissesigma {'>'} home {'>'} here </p>
            </div>
        </div>
    )
}