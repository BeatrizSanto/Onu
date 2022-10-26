import React from "react"
import Header from "../Services/Header"
import Onu from "../Imagens/Onu.png"
import styled from "styled-components"
import Figura from '../components/Cards/cards'



const Container= styled.div`
margin-bottom: 3%;
width:100%;
display: flex;
color:white;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
   text-align:center;
}

p{
   text-align: center;
}
`

const Imagens= styled.div`
width:100%;
display:flex;
align-items: center;
justify-content: space-around;
flex-wrap:wrap;
row-gap: 1rem;
`




export  default function home(){
 return(
   <>
    <Container>
     
     <div>
        <h1>Onu</h1>
     </div>
     <figure>
        <img src={Onu} alt="Onu"/>
     </figure>
     <h2>Campo Limpo - São Paulo</h2>
     <h2>Os Objetivos de Desenvolvimento Sustentável no Brasil</h2>
     <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza,
 proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de 
prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos 
atingir a Agenda 2030 no Brasil.</p>


     
      
    </Container>
     <Imagens>
       <Figura/>
     </Imagens>
     </>
 )


}