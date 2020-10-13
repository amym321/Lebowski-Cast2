import React from 'react';  

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--dark-gray bg-white-90'
                type='search' 
                placeholder='search cast' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox 