import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingWrapper from './LoadingWrapper'

export const UserLayoutHOC = () => {
    const [isUserLoading, setIsLoading] = useState(true)
    const [userList, setUserList] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const userData = await axios.get("https://jsonplaceholder.typicode.com/users")
                setUserList(userData.data)
                setIsLoading(false)
            } catch (err) {
                console.log("Error", err);
                setIsLoading(false)
            }
        })()
    }, [])

    return (
        <LoadingWrapper
            isLoading={isUserLoading}
            message={"No user found."}
            data={userList}
        >
            <h2>User Data</h2>
            <ul>
            {
               userList.map((user)=>
               <li key={user.id}>{user.name} | {user.email}</li>
               ) 
            }
            </ul>

        </LoadingWrapper>
    )
}
export default UserLayoutHOC
