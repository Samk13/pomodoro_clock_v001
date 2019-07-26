import React from 'react';

const SetTimer = ({type, value, handleClick})=> (
    <div className='SetTimer'>
        <h1 id ={`${type}-label`}>

            {type === 'session' ? 'Session ':'Break '} Length

        </h1>
        <div className='SetTimer-controls'>

            <button id={`${type}-decrement`} onClick={() => handleClick(false, `${type}Value`)}
            >

            <span className=" fas fa-arrow-circle-down"></span>


            </button>

            <div id={`${type}-length`}>
            {value}
            </div>


            <button id={`${type}-increment`}
            onClick={()=> handleClick(true, `${type}Value`)}>
            <span className=" fas fa-arrow-circle-up"></span>

            </button>
            
        </div>

    </div>
)


export default SetTimer;