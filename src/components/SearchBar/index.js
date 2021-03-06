import React from 'react'

export default function SearchBar(props) {
    return (
        <form onSubmit={props.handleSearch}>
            <input className='input' placeholder='Search' type='text' value={props.value} onChange={props.handleSearchInputChange} />
        </form>
    )
}
