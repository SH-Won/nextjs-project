import React from 'react'
import {Header} from 'semantic-ui-react';
import NavBar from './NavBar';

function Top() {
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',paddingTop:'10px'}}>
            <img
            style={{width:'80px',height:'80px',marginRight:'1rem'}} 
            src="/images/logo.jpg" 
            alt="logo"/>
            <Header as="h1">SH Won</Header>
            </div>
            <NavBar />
        </div>
    )
}

export default Top
