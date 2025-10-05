import React from 'react';

const IdPage = async ({params} : {params : {id:string}} ) => {

     const  {id}=await params;





    return (
        <div>
            <h1>this is id page of category {id} </h1>
            
        </div>
    );
};

export default IdPage;