import DamedataPage from '@/app/components/damedata.';
import axios from 'axios';

import React, { Suspense } from 'react';




  const fetchProductById=async(id:string)=>{
    const res=await axios(`https://dummyjson.com/posts/${id}`,);
    
    return res.data;
  }


const ProductDatilesPage =async ({params}:{params:{id:string}}) => {
     const  {id}=await  params;
        const product=await fetchProductById(id);

    return (
        <div>
            <h1>this is product datiles page  </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <button className="btn btn-primary">Buy Now</button>

            <div className="mt-8 bg-fuchsia-500 p-4 rounded">
                <h2>{product.title}</h2>
                <p>{product.body}</p>

            </div>



            <div>
             <Suspense fallback={<div>Loading...</div>}>
              
                <DamedataPage/>
             </Suspense>

            </div>
        </div>
    );
};

export default ProductDatilesPage;