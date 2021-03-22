// ACTION TYPES
const SET_PRODUCTS = 'SET_PRODUCTS';

// SELECTORS
export const MODULE_NAME = 'products';
export const selectProductList = state => state[MODULE_NAME].products;

// REDUCER
const initialState = {
    products: []
}

export function productsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: payload,
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

// MIDDLEWARE
export const getProducts = () => async (dispatch) => {
    try {
        const res = await fetch('http://localhost:3000/MOCK_DATA.json');
        const data = await res.json();

        dispatch(setProducts(data.products));
    } catch (err) {
        dispatch({
            type: 'SHOW_ERROR',
            payload: err.message
        })
    }
}