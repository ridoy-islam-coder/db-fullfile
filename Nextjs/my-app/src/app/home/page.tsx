

//  "use client";
 import React from "react";


const HomePage = () => {
    // const [count, setCount] = React.useState(0);
    console.log(process.env.MY_SECRET_KEY);
    return (
        <div>
            <h1>this is home page </h1>
            {/* <p>Count: {count}</p>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button> */}
        </div>
    );
};

export default HomePage;