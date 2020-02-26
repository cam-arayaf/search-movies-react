import React from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export const MoviesList = ({ movies }) => (
    <div className="movies-list">
        {
            movies.map(movie => {
                const { imdbID, Title, Year, Poster } = movie;
                return (
                    <div className="movies-list-item" key={ imdbID }>
                        <Movie id={ imdbID } title={ Title } year={ Year } poster={ Poster } />
                    </div>
                )
            })
        }
    </div>
);

MoviesList.propTypes = {
    movies: PropTypes.array
};