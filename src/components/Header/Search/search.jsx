import React from 'react';
import searchStyle from './search.module.css'

const Search = () => {
    return (
        <div>
            <input type="text" value = 'Enter your search phrase' className = {searchStyle.inputSearch}/>
            <button className = {searchStyle.buttonSearch}></button>
        </div>
    );
}

export default Search;