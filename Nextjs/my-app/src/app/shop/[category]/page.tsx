import React from 'react';

const CategotyPage = async({params}:{params:{category:string}}) => {
    
    const {category} = params;


    return (
        <div>
            <h1>this is categroypage  {category}</h1>
        </div>
    );
};

export default CategotyPage;