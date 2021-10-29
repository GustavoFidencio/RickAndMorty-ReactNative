import { combineReducers } from 'redux';

const INITIAL_STATE = {
    ids: [0, 1, 2],
};

const friendsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'addCart':
            //criar metodo de adicionar um item ao cart
            let { cartItems, requests } = state;

            cartItems.push(cartItems);

            const newState = { requests, cartItems };

            return newState;
        default:
            return state
    }
};

export default combineReducers({
    favorites: friendsReducer
});