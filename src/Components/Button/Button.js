import React from 'react';
import './Button.css';

const buttonType = (params) =>{
    if(params.IsIcon !== undefined && params.IsIcon){
        return(
            <div></div>
        )
    }else{
        return (
            <span className='buttonText' onClick={params.onclick}>
                {params.text}
            </span>
        )
    }
}

export default function Button(params){
    return (
        <div className='Button'>
            {buttonType(params)}
        </div>
    )
}