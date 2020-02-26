import React, { Component } from 'react';
import { api_url } from './../constants';

export class SearchForm extends Component {
    state = { inputMovie: '' };

    handleChange = e => this.setState({ inputMovie: e.target.value });

    handleSubmit = (e, { inputMovie } = this.state) => {
        e.preventDefault();
        fetch(`${ api_url }&s=${ inputMovie }`)
            .then(resp => resp.json())
            .then(results => {
                const { Search = [] } = results;
                const { onResults } = this.props;
                onResults(Search);
            });
    }

    render () {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Movie to search.."
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}