import React from 'react';

const ServerPage = async() => {
   const res= await fetch('https://jsonplaceholder.typicode.com/posts');
   const data=await res.json();
   console.log(data)



    return (
        <div>
            {
                data.map((d: { id: React.Key | null | undefined; title: string; }) => (
                    <h1 key={d.id}>{d.title}</h1>
                ))
            }
        </div>
    );
};

export default ServerPage;