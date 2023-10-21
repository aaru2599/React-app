import React from 'react'

export const LoadingWrapper = ({ isLoading, message, data, children }) => {

    if (isLoading) {
        return <h3>Loading Data</h3>
    }
    if (data.length === 0) { return <p>{message}</p> }

    return children

}
export default LoadingWrapper