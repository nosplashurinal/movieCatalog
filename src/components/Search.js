import React from "react"

const Search = ({ searchString, onChangeInput }) => {
  return <input placeholder='Search a movie title...' className="search" onChange={e => onChangeInput(e.target.value)} value={searchString} />
}

export default Search
