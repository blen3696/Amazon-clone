import React, {createContext, useContext, useReducer} from 'react';

//prepare the datalayer
export const StateContext = createContext();

//  wrap our app and provide the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// pull and push info from the datalayer
export const useStateValue = () => useContext(StateContext);