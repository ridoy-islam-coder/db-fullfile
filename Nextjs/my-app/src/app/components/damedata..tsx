import React from 'react';

const DamedataPage =async () => {

 const res = await fetch('https://dummyjson.com/users', { cache: 'no-store' });
 const data = await res.json();
 console.log(data);



    return (
        <div>
            <h1>{data.limit} </h1>
            <p>{data.total}</p>
            <button className="btn btn-primary">Buy Now</button>
        </div>
    );
};

export default DamedataPage;