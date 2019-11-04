import React from 'react';
import { BrowserRouter as Switch, Router, Route, Link } from 'react-router-dom'; 

export const Main = () => {
    return(
        <div>
            <h1>This is main</h1>
            <Link to="/Routingdemo">To Routing Demo</Link>
        </div>
    )
}