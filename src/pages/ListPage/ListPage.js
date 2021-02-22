import React, { Component } from 'react';
import './ListPage.css';


import { connect } from "react-redux";

class ListPage extends Component {
    
    componentDidMount() {
        const id = this.props.match.params;
        console.log(id);
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    }
    render() { 
        const { title, cart } = this.props;
        return (
            <div className="list-page">
                <h1 className="list-page__title">{title}</h1>
                <ul>
                    {cart.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={"https://www.imdb.com/title/" + item.imdbID} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    title: state.title,
    cart: state.cart
});

export default connect(mapStateToProps)(ListPage);