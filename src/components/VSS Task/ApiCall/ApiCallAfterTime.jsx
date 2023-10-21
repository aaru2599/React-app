import React, { useState, useEffect } from "react";

const ApiCallAfterTime = () => {
    const [message, setMessage] = useState(false);
    const [time, setTime] = useState("");

    const checkTime = () => {
        const now = new Date();
        const saleTime = new Date();
        saleTime.setHours(16, 6, 30);
        if (now >= saleTime) {
            setMessage(true);
        }
        console.log("Now time",now);
        console.log("saleTime",saleTime);
    };
    const times = () => {
        const now = new Date();
        setTime(now.toLocaleTimeString());
    };

    useEffect(() => {
        
        checkTime();
        times();

       
        const timeInterval = setInterval(times, 1000);

       
        const checkInterval = setInterval(checkTime, 1000);

        return () => {
            clearInterval(timeInterval);
            clearInterval(checkInterval);
        }; 
    }, []);

    return (
        <div>
            <h3>{time}</h3>
            {message && <h1>Sale is live</h1>}
        </div>
    );
};

export default ApiCallAfterTime;

