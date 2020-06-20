import React from 'react';


const SearchBox = ({ value, placeholder, onChange }) => {
    return (
        <input
            type="text"
            name="query"
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
        />
    );
}

export default SearchBox;