import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const UserLayout = () => {
    const [userList, setUserList] = useState([])
    const [isLoadingUser, setIsLoadingUser] = useState(true)
    useEffect(() => {
        (async () => {
            try {

                const userData=await axios.get("https://jsonplaceholder.typicode.com/users")
                setUserList(userData.data)
                setIsLoadingUser(false)
                console.log(userData);
            } catch (err) {
                console.log(err);
                setIsLoadingUser(false)
            }
        })();
    }, [])
    return (
        <div>
          {
            isLoadingUser?<h3>Product Loading...</h3>:userList.length>0?(
                <ol>
                {
                    userList.map((user)=>
                    <li key={user.id}>{user.name} | {user.email}</li>
                    )
                }
            </ol>
            ):<h3>No product Available</h3>
          }
        </div>
    )
}
export default UserLayout