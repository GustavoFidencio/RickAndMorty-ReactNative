import { combineReducers } from 'redux';

const INITIAL_STATE = {
    ids: [],
};

const friendsReducer = (state = INITIAL_STATE, action) => {
    let favorites;
    const { ids } = state;
    switch (action.type) {
        case 'ADD_FAVORITE':
            let data = [...ids, action.newValue];
            favorites = { ids: data };
            return favorites;
        case 'REMOVE_FAVORITE':
            let index = ids.indexOf(action.newValue);
            favorites = ids;
            if (index >= 0) favorites.splice(index, 1)
            favorites = { ids: favorites };
            return favorites;
        default:
            return state
    }
};

export default combineReducers({
    favorites: friendsReducer
});