
import React from 'react';

const  DesbordDetiles = async ({ params }: { params: { id: string } }) => {
     
const { id } = params;



    return (
        <div>
            <h1>this is dainamike page {id} </h1>
        </div>
    );
};

export default DesbordDetiles;