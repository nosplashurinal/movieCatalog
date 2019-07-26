import React from "react"
import "../styles/pagination.scss"

const Pagination = ({ onClick, totalResults }) => {
  const pages = [...Array(Math.ceil(totalResults/10)).keys()]
  return (
    <ul className="pagination">
      {pages.map((item, index) => (
        <li onClick={() => onClick(index + 1)} key={index}>
          {index + 1}
        </li>
      ))}
    </ul>
  )
}

export default Pagination
