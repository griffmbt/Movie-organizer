import React, { Component } from 'react';
import './SearchBox.css';

import { connect } from "react-redux";
import {fetchLoadMovies} from "../../redux/actions"

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
   
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }
      
    loadMovies = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?s=` + this.state.searchLine + `&apikey=af77a42c`)
            const movies = await response.json();
            console.log(movies.Search);
            this.props.dispatch(fetchLoadMovies(movies.Search))
           // this.setState(() => ({ movies: movies.Search }));
        } catch (err) {
            console.log(err)
        }

        // console.log(this.state.searchLine);
        // console.log(this.state.movies);
        // console.log(movies.Search);
    }

    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        onClick={this.loadMovies}
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchLoadMovies: (movies) => {
        const action = {
            type: "LOAD_MOVIES",
            payload: {
                movies: movies
            }
        }
        dispatch(action);
    }
})
 
export default connect(mapDispatchToProps)(SearchBox);