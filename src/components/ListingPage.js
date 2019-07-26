import React, { Component, Fragment } from "react"
import { get } from "axios"
import { debounce } from "../utils"
import Results from "./Results"
import Pagination from "./Pagination"
import Header from "../components/Header"

class ListingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: "",
      result: [],
      currentPage: undefined,
      totalResults: undefined,
      loadingSearch: false,
      error: undefined,
    }
  }
  onClickPage(e) {
    this.onChangeSearch(this.state.searchString, e)
    this.setState({
      currentPage: e,
    })
  }
  onChangeSearch(searchString, currentPage = 1) {
    this.setState({
      searchString,
    })
    debounce(() => {
      this.setState({
        loadingSearch: true,
      })
      get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=fa281222&s=${searchString}${
          currentPage ? `&page=${currentPage}` : ``
        }`
      )
        .then(res => {
          const data = res.data
          if (data["Search"]) {
            this.setState({
              result: data.Search,
              totalResults: data.totalResults,
              loadingSearch: false,
              error: undefined,
            })
          } else
            this.setState({
              result: [],
              totalResults: undefined,
              loadingSearch: false,
              error: data.Error,
            })
        })
        .catch(function(error) {
          console.log(error)
        })
    }, 400)()
  }
  render() {
    const {
      searchString,
      result,
      totalResults,
      loadingSearch,
      error,
    } = this.state
    return (
      <Fragment>
        <Header
          onChangeSearch={e => this.onChangeSearch(e)}
          searchString={searchString}
        />
        {searchString.length !== 0 && !loadingSearch && (
          <Results
            result={result}
            searchString={searchString}
            totalResults={totalResults}
            error={error}
          />
        )}
        {totalResults && (
          <Pagination
            onClick={e => this.onClickPage(e)}
            totalResults={parseInt(totalResults)}
          />
        )}
        {loadingSearch && <p>Loading...</p>}
      </Fragment>
    )
  }
}

export default ListingPage
