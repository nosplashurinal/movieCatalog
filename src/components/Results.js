import React, { Fragment } from "react"
import ResultItem from "./ResultItem.js"
import "../styles/results.scss"

const Results = ({ result, searchString, totalResults, error }) => {
  return (
    <div className="results">
      {result.length > 0 && (
        <Fragment>
          <p>{`You searched for: ${searchString}, ${totalResults} results found.`}</p>
          {result.map((item, index) => (
            <ResultItem key={index} content={item} />
          ))}
        </Fragment>
      )}
      {error && <p>{error}</p>}
    </div>
  )
}

export default Results
