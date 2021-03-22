// ACTION TYPES
const TOGGLE_FAVORITES_MODAL = 'TOGGLE_FAVORITES_MODAL';
const TOGGLE_CART_MODAL = 'TOGGLE_CART_MODAL';

// SELECTORS
export const MODULE_NAME = 'modal';
export const selectFavoritesModal = state => state[MODULE_NAME].isFavoritesModalOpen;
export const selectCartModal = state => state[MODULE_NAME].isCartModalOpen;

// REDUCER
const initialState = {
    isFavoritesModalOpen: false,
    isCartModalOpen: false
}

export function modalReducer(state = initialState, { type }) {
    switch (type) {
        case TOGGLE_FAVORITES_MODAL:
            return {
                ...state,
                isFavoritesModalOpen: !state.isFavoritesModalOpen,
            }
        case TOGGLE_CART_MODAL:
            return {
                ...state,
                selectCartModal: !state.isCartModalOpen,
            }     
        default:
            return state
    }
}

// ACTION CREATORS
export const favoritesModalAction = () => ({
    type: TOGGLE_FAVORITES_MODAL
})

export const cartModalAction = () => ({
    type: TOGGLE_CART_MODAL
})


export const toggleFavoritesModal = () => dispatch => {
    dispatch(favoritesModalAction());
}

export const toggleCartModal = () => dispatch => {
    dispatch(cartModalAction());
}
