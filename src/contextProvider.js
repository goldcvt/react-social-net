import React from 'react'

const StoreProvider = React.createContext(null)

export default StoreProvider

export const Provider = (props) => {
    return (
        <StoreProvider.Provider value={props}>
            {props.children}
        </StoreProvider.Provider>
    )
}

