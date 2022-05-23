import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { api } from '../../api';
import { saveFavs, selectFavorites, selectSavedId } from '../../features/favorites/favoriteSlice'
import { removeFav } from '../../features/favorites/favoriteSlice';
import { Link } from 'react-router-dom';

import './Favorities.css'


const Favorities = () => {
    const [title,setTitle] = useState('');
    const favorites = useSelector(selectFavorites);
    const savedId = useSelector(selectSavedId)

    const dispatch = useDispatch();
    const handleSave = async () => {
        const response = await api.saveFavs({title, movies:favorites});
        console.log(response);
        dispatch(saveFavs(response.id));     
    }
    console.log(savedId)

    return (
        <div className='favorites-container'>
            <div className="favorites">
                <input className="favorites__name" value={title} onChange={e=> setTitle(e.target.value)}/>
                <ul className="favorites__list">
                    {favorites.map(f => {
                        return (
                            <li className="favorites__list-item" key={f.imdbID}>  {f.Title} ({f.Year})
                                <button disabled={savedId} onClick={e => dispatch(removeFav(f.imdbID))}>X</button>
                            </li>
                        )
                    })}
                </ul>
                {!savedId ?
                    <button disabled={!title} onClick={handleSave} type="button" className="favorites__save">Save</button>
                    : <Link to={`/saved-favorite/${savedId}`}>Link to favorities</Link>
                }
            </div>
        </div>
    )
}
export default Favorities;