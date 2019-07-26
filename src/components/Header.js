import React from "react"
import Search from "./Search.js"
import "../styles/header.scss"

const Header = ({ onChangeSearch, searchString }) => {
  return (
    <div className="header">
      <h1>Movie Catalog</h1>
      <Search
        onChangeInput={e => onChangeSearch(e)}
        searchString={searchString}
      />
      <div class="login">Bharadwaj</div>
    </div>
  )
}

export default Header
