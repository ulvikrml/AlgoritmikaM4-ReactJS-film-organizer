import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveFav, selectFavorites, selectSavedId } from '../features/favorites/favoriteSlice'
import { removeFav } from '../features/favorites/favoriteSlice';
import { Link } from 'react-router-dom';

import './Favorities.css'


const Favorities = () => {
    const favorites = useSelector(selectFavorites);
    const savedId = useSelector(selectSavedId)

    const dispatch = useDispatch();
    const handleSave = ()=>{
        dispatch(saveFav())
    }
    return (
        <div className='favorites-container'>
            <div className="favorites">
                <input className="favorites__name" />
                <ul className="favorites__list">
                    {favorites.map(f => {
                        return (
                            <>
                                <li className="favorites__list-item" key={f.imdbID}>  {f.Title} ({f.Year})
                                <button disabled={savedId} onClick={e => dispatch(removeFav(f.imdbID))}>X</button>
                                </li>
                            </>
                        )
                    })}
                </ul>
                {!savedId ? 
                <button onClick={handleSave} type="button" className="favorites__save">Save</button>
                    : <Link to={`/saved-favorite/${savedId}`}>Link to favorities</Link>
            }
            </div>
        </div>
    )
}
export default Favorities;