import React, {useState} from 'react'
import {api} from '../api'
import MoviesList from './MoviesList'
import SearchForm from './SearchForm';
import './Movies.css'

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const handleSearch = async (searchString) => {
       const result = await api.searchAsync(searchString);
        if(result.Response === 'True'){
            setMovies(result.Search)
        }
        else{
            setMovies([]);
        }
    }
    return (
        <div className='movies'>
           <SearchForm onSubmit={handleSearch}/>
           <MoviesList movies={movies}/>
        </div>
    )
}

export default Movies;