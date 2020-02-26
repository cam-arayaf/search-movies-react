import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from './../components/ButtonBackToHome';
import { api_url } from './../constants';

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    };

    state = { movie: {} };

    getMovie = ({ id } = this.props.match.params) => fetch(`${ api_url }&i=${ id }`)
        .then(resp => resp.json())
        .then(movie => this.setState({ movie }));

    componentDidMount () {
        this.getMovie();
    }

    render ({ Title, Poster, Actors, Metascore, Plot } = this.state.movie) {
        return (
            <div>
                <ButtonBackToHome />
                <h1>{ Title }</h1>
                <img src={ Poster } alt={ Title } />
                <h3>{ Actors }</h3>
                <span>{ Metascore }</span>
                <p>{ Plot }</p>
            </div>
        );
    }
}