import { combineReducers } from 'redux';

const INITIAL_STATE = {
    ids: [1, 2],
};

const friendsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':

            console.log('oi cai no add favorite');
            console.log('meu id é', action.newValue);
            
            
            let { ids } = state;

            ids = [...ids, action.newValue];

            const favorites = { ids };
            
            return favorites;
        default:
            return state
    }
};

export default combineReducers({
    favorites: friendsReducer
});