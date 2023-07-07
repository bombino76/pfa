import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    name: undefined,
    seats: undefined,
    luxe:false

    
};

export const SearchContextTwo = createContext(INITIAL_STATE)

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

export const SearchContextTwoProvider =({children}) =>{
    const [state,dispatch] = useReducer(SearchReducer,INITIAL_STATE);

    return(
        <SearchContextTwo.Provider
        value={{ name : state.name, seats : state.seats, luxe : state.luxe, dispatch}}
        >
            {children}

        </SearchContextTwo.Provider>

    )
}