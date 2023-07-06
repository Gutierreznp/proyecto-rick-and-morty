import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            let newFavorites = state.myFavorites.filter(element => element.id !== action.payload);
            return {
                ...state,
                myFavorites: newFavorites
            }
        default:
            return {...state};
    }
}

export default reducer;