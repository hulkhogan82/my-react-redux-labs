import React from 'react';

export const NotFound = () =>{
    console.log("NotFound");
    return (
        <>
        <h1>404 Not found</h1>
        <p>Oops! We couldn't find the thing you're asking for. Sorry about that!</p>
        <p>Maybe try one of these instead?</p>
        <ul>
            <li value="/">Find a movie</li>   
            <li value="/login">Log in</li> 
            <li value="/account">Register</li>          
        </ul>
        </>
    )
}