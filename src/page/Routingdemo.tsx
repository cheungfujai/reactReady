import React from 'react';
import { BrowserRouter as Switch, Router, Route, Link } from 'react-router-dom'; 

export const Routingdemo = () => {
    return(
        <div>
            <h1>This is Routing demo</h1>
            <Link to="/">To Main</Link>
        </div>
    )
}