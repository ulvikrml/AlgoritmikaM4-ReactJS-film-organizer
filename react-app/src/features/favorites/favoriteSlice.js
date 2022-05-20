import {createSlice} from '@reduxjs/toolkit' 

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        savedId: null,
        favorites: []
    },
    reducers: {
        addFav: (state, action) =>{
            if(!state.favorites.some(f => f.imdbID === action.payload.imdbID)
            && !state.savedId){
                state.favorites.push(action.payload);
            }
        },
        removeFav: (state, action) =>{
            state.favorites = state.favorites.filter(f => f.imdbID !== action.payload);
        },
        saveFav: (state,action) =>{
            state.savedId = 'abc'
        }
    }
})

export const selectSavedId = (state) => state.favorite.savedId; 
export const selectFavorites = (state) => state.favorite.favorites;

export const {addFav, removeFav, saveFav} = favoriteSlice.actions;

export default favoriteSlice.reducer;