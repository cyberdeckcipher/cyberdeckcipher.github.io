import React from "react";
import Button from "../../Components/Button/Button";
import styles from '../../Styles/App.module.css';
import { useNavigate } from "react-router-dom";
import './AppHeader.css';

const RenderButton = (text) =>{
    let navigate = useNavigate();
    return (
        <Button 
            text = {text}
            onclick = {
                async (event)=>{
                event.preventDefault();
                navigate(("../"+text), { replace: true });
                }
            } 
        />
    )
}

const AppHeader = () => {
    return (
        <div className={styles.AppHeader}>
            <div className='AppHeaderMenu'>
                {RenderButton('Projects')}
                {RenderButton('Arts')}
            </div>
            <div className='AppHeaderBreadcrumb'>
                <span>Breadcrumbs {'>'} here</span>
            </div>
        </div>
    )
}

export default AppHeader;