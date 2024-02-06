import React, { useState } from 'react'
import useAPICall from './useAPICall';

const NewApiData = () => {
    const [apiData] = useAPICall("https://jsonplaceholder.typicode.com/posts")
    console.log("post api", apiData);
    return (
        <ul>
            <h2>User Post</h2>
            {apiData.map((data) =>
                <li key={data.id}>{data.title}</li>
            )}
        </ul>
    )
}

export default NewApiData