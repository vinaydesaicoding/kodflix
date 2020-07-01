import React from 'react';
import { Link } from 'react-router-dom';
import getGallery from './GetGallery.js';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        let movie = getGallery().find(( movie ) => movie.id === movieId)
        this.setState({ movie }); 
    }

    render() {
        return (
            <div>
                <h1> { this.state.movie.title } </h1>
                <Link to='/'>Back to homepage</Link>
            </div>
        )
    }
}

