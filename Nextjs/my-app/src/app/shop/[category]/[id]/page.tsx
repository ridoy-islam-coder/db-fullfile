import React from 'react';

const IdPage = async ({params} : {params : {category:string,id:string}} ) => {

     const  {category,id}=await params;

    return (
        <div>
            <h1>this is id page of category {id} ,{category}</h1>
            
        </div>
    );
};

export default IdPage;