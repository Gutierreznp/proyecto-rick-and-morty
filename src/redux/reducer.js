import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                allCharacters: state.allCharacters.filter(
                    (favorite) => favorite.id !== action.payload),
                myFavorites: state.allCharacters.filter(
                    (favorite) => favorite.id !== action.payload)
            }

        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(char => char.gender === action.payload);
            return {
                ...state,
                myFavorites: 
                    action.payload === 'allCharacters' ?
                    [...state.allCharacters]
                    : allCharactersFiltered
            }
        
        case ORDER:
            const allCharactersCopy = [...state.allCharacters];
            return {
                ...state,
                myFavorites:
                    action.payload === 'A' ? allCharactersCopy.sort((a, b) => a.id - b.id) : allCharactersCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return {...state};
    }
}

export default reducer;