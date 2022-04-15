import React from "react";
import Button from "../../Components/Button/Button";
import styles from '../../Styles/App.module.css';
import { useNavigate, useLocation } from "react-router-dom";
import Pallete from '../../Styles/Pallete.json';
import './AppHeader.css';

const RenderButton = (text) =>{
    let navigate = useNavigate();
    return (
        <Button 
            text = {text}
            onclick = {
                async (event)=>{
                    event.preventDefault();
                    navigate(('../'+text), { replace: true });
                }
            } 
        />
    )
}

const isLastcrumb = (index, size) =>{
    return ((size === 0) || ((index+1) >= size))
}

const GetBreadcrumbStyle = (lastcrumb) => {
    if(lastcrumb){
        return {
            color: Pallete.hightlight
        }
    }
}

const RenderBreadcrumbButton = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let {pathname} = location;
    var pathnames = pathname.split('/').filter(x => x);
    return(
        <div className='AppHeaderBreadcrumb'>
            <span onClick={ 
                async (event)=>{
                event.preventDefault();
                navigate(('/'), { replace: true });
            }}>
                Home
            </span>
            {
                pathnames.map((name, index) =>{
                    var lastcrumb = isLastcrumb(index, pathnames.length);
                    return(
                        <span key = {index}>
                            {' > '}
                            <span 
                                style={GetBreadcrumbStyle(lastcrumb)}
                                onClick={ async (event)=>{
                                    event.preventDefault();
                                    if(!lastcrumb){
                                        var goTo = pathnames.slice(0,index+1).join('/');
                                        navigate((goTo), { replace: true });
                                    }
                                }}
                            >
                                {name}
                            </span>
                        </span>
                    )
                })
            }
        </div>
    )
}

const AppHeader = () => {
    return (
        <div className={styles.AppHeader}>
            <div className='AppHeaderMenu'>
                {RenderButton('Projects')}
                {RenderButton('Arts')}
            </div>
            <RenderBreadcrumbButton/>
        </div>
    )
}

export default AppHeader;