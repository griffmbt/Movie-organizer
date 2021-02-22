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
            this.props.dispatch(fetchLoadMovies(movies.Search))
        } catch (err) {
            console.log(err)
        }
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
 
export default connect(null)(SearchBox);