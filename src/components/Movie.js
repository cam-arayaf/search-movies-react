import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Movie = ({ id, title, year, poster }) => (
    <Link className="card" to={ `/detail/${ id }` }>
        <div className="card-image">
            <figure className="image">
                <img
                    src={ poster }
                    alt={ title }
                />
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{ title }</p>
                    <p className="subtitle is-6">{ year }</p>
                </div>
            </div>
        </div>    
    </Link>
);

Movie.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
};