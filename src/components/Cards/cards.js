import React, {useState} from 'react'
import figura from './infor'
import styled from 'styled-components'

const Button= styled.button`
border:none;
img{
    width:20rem;
}
`
const Modal= styled.div`
width:50%;
min-height:20vh;
background-color:yellow;
padding: 0.5rem;
transform:${({open}) => open ? 'scale(1)' : 'scale(0)'};
 transition: transform 0.4s easy-in-out;
position:fixed;
top:20%;
z-index:2000;
display:flex;
flex-direction: column;
align-items: center;
p{
    color:black;
    width:70%;
    font-size: 2rem; 
    text-align: center;
}
@media screen and (max-width: 500px) {
    width:95%;
    p{
        width: 100%;
    }
}
`
export default function Cards(){

    const[open,setOpen]= useState(false)
    const [play,setPlay]= useState([])

    const modal=(item)=>{
        setPlay([item])
    }

    const abrir =()=>{
        setOpen(!open)
    }

    return(
        <>
        {figura.map((item, index) =>(
            <>
            <Button open={open} onClick={() => {modal(item);abrir()}} key={index}>
                <img src={item.img}alt='#'/>
            </Button>
            </>
        ))}
       
        <Modal open={open}>
        {play.map((item, index)=>(
           <> 
           <p key={index}>{item.text}</p>
            <button onClick={()=> {abrir()}}>fechar</button>
            </>
            ))}
        </Modal>
        </>
    )
}