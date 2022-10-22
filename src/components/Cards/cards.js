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
height:15rem;
background-color:yellow;
transform:${({open}) => open ? 'scale(1)' : 'scale(0)'}
 transition: transform 0.4s easy-in-out;
position:fixed;
top:10%;
z-index:2000;
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
                <img src={item.img}/>
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