import { createContext, useReducer } from "react";

// Create a new contect for the cards data
export const CardsContext = createContext();

export const cardsReducer = (state, action) => {
    // check the action type
    switch (action.type) {
        case "SET_CARDS":
            return {
                cards: action.payload,
            };
        case "CREATE_CARD":
            return {
                cards: [action.payload, ...state.cards],
            };
        case "DELETE_CARD":
            return {
                cards: state.cards.filter((c) => c._id !== action.payload._id),
            };
        default:
            return state;
    }
};

// Provide the context to application tree (this is gonna wrap the whole app component)
export const CardsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cardsReducer, { cards: null });

    return (
        // wrap the app component with the context provider
        <CardsContext.Provider value={{ ...state, dispatch }}>
            {/* destructured children components all receive access to the ContextProvider */}
            {children}
        </CardsContext.Provider>
    );
};
