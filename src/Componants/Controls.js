import React from 'react';


const Controls = ({active, handleReset, hanlePlayPause}) => (
    <div className='Controls'>
        <button id='start_stop'
        onClick={hanlePlayPause}
        
        >
            {active ? <span className=" fas fa-pause-circle">

            </span> : <span className=" fas fa-play-circle"></span> 
            }
            
            </button>
        <button id='reset'
        onClick={handleReset}
        >
        <span className=" fas fa-stop-circle"></span>
        </button>

    </div>

);

export default Controls;