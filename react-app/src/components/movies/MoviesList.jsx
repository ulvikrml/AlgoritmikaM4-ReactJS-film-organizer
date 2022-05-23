import React from 'react'
import MoviesListItem from './MoviesListItem';
import './MoviesList.css'

const MoviesList = ({movies}) => {
    
  return (
    <div className='movies__item'>
      {movies?.length
       ? movies.map(m => <MoviesListItem movie={m} key={m.imdbID} />) 
       : <h1 className='no-movies'>There are no content yet...</h1>
      }
    </div>
  );
}
export default MoviesList;