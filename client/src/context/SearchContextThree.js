import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    wifi: false,
    babySeats: false,
    extraBaggage:false,
    elseExtra: undefined

    
};

export const SearchContextThree = createContext(INITIAL_STATE)

const SearchReducer = (state,action)=>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;

    }
};

export const SearchContextThreeProvider =({children}) =>{
    const [state,dispatch] = useReducer(SearchReducer,INITIAL_STATE);

    return(
        <SearchContextThree.Provider
        value={{ wifi : state.wifi, babySeats : state.babySeats, extraBaggage : state.extraBaggage, elseExtra: state.elseExtra, dispatch}}
        >
            {children}

        </SearchContextThree.Provider>

    )
}