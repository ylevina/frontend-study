// ACTION TYPES
const SET_FAVORITES = 'SET_FAVORITES';
const ADD_FAVORITE = 'ADD_FAVORITE';
const DELETE_FAVORITE = 'DELETE_FAVORITE';

// SELECTORS
export const MODULE_NAME = 'favorites';
export const selectFavoritesList = state => state[MODULE_NAME].favorites;

// REDUCER
const initialState = {
    favorites: []
}

export function favoritesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_FAVORITE_IDS:
            return {
                ...state,
                favorites: payload,
            }
        case SET_FAVORITES:
            return {
                ...state,
                favorites: payload,
            }
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, payload],
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(favorite.id !== payload),
            }
        default:
            return state
    }
}

// ACTION CREATORS
export const setFavorites = payload => ({
    type: SET_FAVORITES,
    payload
})

export const addFavorite = payload => ({
    type: ADD_FAVORITE,
    payload
})

export const deleteFavorite = payload => ({
    type: DELETE_FAVORITE,
    payload
})

// MIDDLEWARE
export const getFavorites = () => async (dispatch) => {
    try {      
        const favoritesStorage = localStorage.getItem('favorites');
          if (favoritesStorage) {
            const favoritesIds = favoritesStorage.split(',').map(item => Number(item));
            dispatch(res.products.filter(item => favoritesIds.includes(item.id)));
          }        
    } catch (err) {
        dispatch({
            type: 'SHOW_ERROR',
            payload: err.message
        })
    }
}

export const addFavorite = (id) => async (dispatch) => {
    try {
        const res = await fetch('http://localhost:3000/MOCK_DATA.json');
        const data = await res.json();

        dispatch(setFavorites(data.products.filter(-id)));
    } catch (err) {
        dispatch({
            type: 'SHOW_ERROR',
            payload: err.message
        })
    }
}

export const deleteFavorite = (id) => async (dispatch) => {
    try {
        const res = await fetch('http://localhost:3000/MOCK_DATA.json');
        const data = await res.json();

        dispatch(setFavorites(data.products.filter(-id)));
    } catch (err) {
        dispatch({
            type: 'SHOW_ERROR',
            payload: err.message
        })
    }
}
