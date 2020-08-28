import React from 'react'
import loading from './fetchWeather/loading.svg';

export default (props) =>{

    return(
        <div className = 'waiting-container'>
                 <div className = 'waitingForData'>
                     <div className = 'waiting-packman'><img src = {loading}/></div>
                     <div >Getting Weather Information</div>
                 </div>
            </div>
    )


}