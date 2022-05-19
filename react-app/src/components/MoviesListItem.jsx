import React from 'react'
import { useDispatch } from 'react-redux';
import { addFav } from '../features/favorites/favoriteSlice';
import './MoviesListItem.css';

const MoviesListItem = ({ movie }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addFav(movie));
  }
  return (
    <div className="movie-item">
      <img className="movie-item__poster" src={movie.Poster} alt={movie.Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">{movie.Title}&nbsp;({movie.Year})</h3>
        <button onClick={handleClick} type="button" className="movie-item__add-button">Add to favorites</button>
      </div>
    </div>

  )
}

export default MoviesListItem