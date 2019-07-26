import React from "react"

const onError = e => {
  e.target.parentElement.classList.add(`no-image`)
}

const ResultItem = ({ key, content }) => {
  return (
    <div className="result-item" key={key}>
      {content.Poster !== "N/A" ? (
        <img className="poster" onError={onError} src={content.Poster} alt={content.Title} />
      ) : (
        <div className="placeholder">Image not found</div>
      )}
      <ul className="description">
        <li>{`Name: ${content.Title}`}</li>
        <li>{`Year: ${content.Year}`}</li>
        <li>{`Imdb Id: ${content.imdbID}`}</li>
        <li>{`Type: ${content.Type}`}</li>
      </ul>
    </div>
  )
}

export default ResultItem
