import React, { createContext, useContext} from 'react'

const ProductContext = createContext()

export function ProductStore(){
    return useContext(ProductContext)
}

export function ProductProvider({children, initialState, reducer }){
    const [globalState, dispatch] = React.useReducer(reducer, initialState);
    return (
        <ProductContext.Provider value={[globalState, dispatch]}>
            {children}
        </ProductContext.Provider>
    )
}