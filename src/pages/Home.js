import React, { Component } from 'react';
import { MoviesList } from './../components/MoviesList';
import { Title } from './../components/Title';
import { SearchForm } from './../components/SearchForm';

export class Home extends Component {
    state = { usedSearch: false, results: [] };

	handleResults = results => this.setState({ usedSearch: true, results });

    renderResults = ({ results } = this.state) =>
        !results.length ? <p>Without results</p> : <MoviesList movies={ results } />

    render ({ usedSearch } = this.state) {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={ this.handleResults } />
                </div>
                { usedSearch ? this.renderResults() : <small>Use the form to search a movie</small> }
            </div>
        );
    }
}