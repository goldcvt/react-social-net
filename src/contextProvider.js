import React from 'react'

const StoreProvider = React.createContext(null)

export default StoreProvider

export const ProviderComponent = (props) => {
    return (
        <StoreProvider.Provider value={props.value}>
            {props.children}
        </StoreProvider.Provider>
    )
}

