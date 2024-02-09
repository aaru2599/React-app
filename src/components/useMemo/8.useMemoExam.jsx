import React, { useState } from 'react'
import ChildMemo from './9.ChildMemo';

const UseMemoExam = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
console.log("parant called");
    return (
        <div>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Name'
            />
            <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <ChildMemo name={name}/>

            

        </div>
    )
}

export default UseMemoExam