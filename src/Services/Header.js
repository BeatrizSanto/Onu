import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavBar = styled.nav`
display:flex;
widht:50%;
justify-content: space-around;
align-items: center;

`


//  const  = styled`
//  color:white;
//  text-decoration: none;
// `




export default function Header(){
    return(
        <>
        <NavBar>
        <Link to= "/"><p>Home</p></Link>
        <Link to= "/Sobre"><p>Sobre</p></Link>
        </NavBar>
        </>
    )
}
