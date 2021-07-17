import React from 'react';
import searchStyle from './search.module.css'

const Search = () => {
    return (
        <div className = {searchStyle.wrap}>
            <input type="text" value = "It's just for beauty" className = {searchStyle.inputSearch}/>
        </div>
    );
}

export default Search;