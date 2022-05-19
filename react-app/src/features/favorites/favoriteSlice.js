import {createSlice} from '@reduxjs/toolkit' 

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: []
    },
    reducers: {
        addFav: (state, action) =>{
            if(!state.favorites.some(f => f.imdbID === action.payload.imdbID)){
                state.favorites.push(action.payload);
            }
        },
        removeFav: (state, action) =>{
            state.favorites = state.favorites.filter(f => f.imdbID !== action.payload);
        }

    }
})

export const selectFavorites = (state) => state.favorite.favorites;

export const {addFav, removeFav} = favoriteSlice.actions;

export default favoriteSlice.reducer;