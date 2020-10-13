import React from 'react';  

const Card = ({ name, quote, id, photo }) => {    
    return(
        <div className='tc bg-washed-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>  
            <img alt={name} src={photo}></img>
            {/* <img alt={name} src="./assets/cast_bunny.png"></img> */}
            <div>
                <h2>{name}</h2>
                <p className='b'>{quote}</p>
            </div>
        </div>
    );
}

export default Card;