// ACTION TYPES
const SET_CART = 'SET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

// SELECTORS
export const MODULE_NAME = 'cart';
export const selectCartList = state => state[MODULE_NAME].cart;

// REDUCER
const initialState = {
    cartProducts: [],
    cartIds:[]
}

export function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_CART:
            return {
                ...state,
                cart: payload,
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: payload,
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: payload,
            }
        default:
            return state
    }
}

// ACTION CREATORS
export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
})

export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
})

export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
})

// MIDDLEWARE
export const getCart = (allProducts) => async (dispatch) => {
    try {
        const res = await fetch('http://localhost:3000/MOCK_DATA.json');
        const data = await res.json();

        const cartStorage = localStorage.getItem('cart');

        dispatch(setProducts(data.products));
    } catch (err) {
        dispatch({
            type: 'SHOW_ERROR',
            payload: err.message
        })
    }
}