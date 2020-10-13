import React from 'react';  
import Card from './Card'; 

const CardList = ({ cast }) => {
    return(
        <div>               
            {
                cast.map((user, i) => {               
                    return (
                        <Card 
                        key={i} 
                        id={cast[i].id} 
                        photo={cast[i].photo}
                        name={cast[i].name} 
                        quote={cast[i].quote}
                        />  
                     );
                })
            }
         </div>
    ); 
}

export default CardList