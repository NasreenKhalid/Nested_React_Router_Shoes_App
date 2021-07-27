import React from 'react'
import { useParams } from 'react-router'

export const Topic = ({shoes}) => {
    let {slug} = useParams();
    const shoe = shoes[slug]

    const {name,img} = shoe;
    {console.log(slug)}
   
    return (
        <div>
           <h2>This is the Shoe component</h2> 
            <h2>{slug}</h2>
            <h3>Brand: {name}</h3>
            <img src={img}  alt={name}/>
        </div>
    )
}
