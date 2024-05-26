import { Children, createContext, useContext, useReducer } from "react";

const PortfolioContext = createContext();

const initialState = {
    basicDetails: {},
    educationDetails: {},
    experienceDetails: {},
    projectDetails: {},
}

const portfolioReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BASIC_DETAILS':
            return { ...state, basicDetails: action.payload };
        case 'SET_EDUCATION_DETAILS':
            return { ...state, educationDetails: action.payload };
        case 'SET_EXPERIENCE_DETAILS':
            return { ...state, experienceDetails: action.payload };
        case 'SET_PROJECT_DETAILS':
            return { ...state, projectDetails: action.payload };
        default:
            return state;
    }
}

export const PortfolioProvider = ({children}) =>{
    const[state, dispatch] = useReducer(portfolioReducer, initialState)

    return(
        <PortfolioContext.Provider value={{state, dispatch}}>
            {children}
        </PortfolioContext.Provider>
    )
}

export const usePortfolio = () => useContext(PortfolioContext);