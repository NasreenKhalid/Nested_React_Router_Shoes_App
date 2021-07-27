import React from 'react'
import { Link, Switch, useRouteMatch,Route } from 'react-router-dom'


export const Topics = ({shoes}) => {
 
    return (
       
        <div className="shoe-box">

        <h2 className="title"> Topics Component</h2>
        <div className="box">
        {Object.entries(shoes).map(([slug, {name,img}]) => (
                <li key={slug}>
                    <Link to={`/topic/${slug}`}>
                        {console.log(slug)}
                        <h2 className="shoe-name">{name}</h2>
                        <img src={img} alt={name}/>
                    </Link>
                </li>
            ))} 
        </div>
            

        </div>
    )
}
