import React from "react"
import Header from "../Services/Header"
import Onu from "../Imagens/Onu.png"
import styled from "styled-components"
import Figura from '../components/Cards/cards'



const Container= styled.div`
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Imagens= styled.div`
width:100%;
display:flex;
align-items: center;
justify-content: space-around;

`




export  default function home(){
 return(
    <Container>
     
     <div>
        <h1>Onu</h1>
     </div>
     <figure>
        <img src={Onu} alt="Onu"/>
     </figure>

     <Imagens>
      <Figura/>
     </Imagens>
    </Container>
 )


}