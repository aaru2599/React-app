import React, { useEffect, useState } from "react";

function SetIntervalMsg() {
  const [saleLive, setSaleLive] = useState(false);

  // Set the target sale time (in 24-hour format)
  const targetSaleTime = "11:29:00"; // Adjust this to your desired sale start time

  useEffect(() => {
    const checkSaleStart = () => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString("en-US", { hour12: false });

      if (currentTime === targetSaleTime && !saleLive) {
        setSaleLive(true);
        // Call your API here to start the sale
      }
    };

    const timer = setInterval(checkSaleStart, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [saleLive]);

  return (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
      {saleLive && <h2>Sale Live</h2>}
    </div>
  );
}

export default SetIntervalMsg;
