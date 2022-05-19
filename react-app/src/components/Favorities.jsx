import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFavorites } from '../features/favorites/favoriteSlice'
import { removeFav } from '../features/favorites/favoriteSlice';
import './Favorities.css'


const Favorities = () => {
    const favorites = useSelector(selectFavorites);

    const dispatch = useDispatch();

    return (
        <div className='favorites-container'>
            <div className="favorites">
                <input className="favorites__name" />
                <ul className="favorites__list">
                    {favorites.map(f => {
                        return (
                            <>
                                <li className="favorites__list-item" key={f.imdbID}>{f.Title} ({f.Year})
                                <button onClick={e => dispatch(removeFav(f.imdbID))}>X</button>
                                </li>
                            </>
                        )
                    })}
                </ul>
                <button type="button" className="favorites__save">Save</button>
            </div>
        </div>
    )
}
export default Favorities;