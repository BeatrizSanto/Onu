import React from "react"
import Praca from "../../Imagens/praca.jpg"
import styled from "styled-components"


const Container= styled.div`
width:100%;
display: flex;
color:white;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
    text-align: center;
}
p{
    width:70%;
    font-size: 1.2rem;
    text-align:center;
    margin-top: 2rem;  
}
img{
    width:100%;
}
@media screen and (max-width: 500px) {
    p{
        width: 100%;
    }
}
`



export default function Sobre(){
    return(
       <>
        <Container>
       <h2>Campo Limpo em São Paulo</h2>
       <p>O distrito de Campo Limpo está localizado na Zona Sul da capital paulista, fazendo divisa com os distritos de  Vila Andrade, Jardim São Luís e Capão Redondo e com o município de Taboão da Serra através do Córrego Pirajuçara. O distrito está localizado a cerca de 16 quilômetros do Marco Zero da cidade de São Paulo, na Zona Sudoeste. De acordo com dados dos censos demográficos 1991 e 2000, a população do Campo Limpo é de 191 527 habitantes e a densidade demográfica é de 14 963 habitantes por quilômetro quadrado.
   O distrito é conhecido pela presença de uma grande divisão social, com pessoas de baixa renda vivendo em favelas, residências de baixo padrão e conjuntos habitacionais populares, ao lado de condomínios horizontais e verticais de classe média e média alta.
    Além disso, o distrito possui grandes áreas de comércio popular e uma atividade industrial em processo de declínio, com alguns galpões e fábricas ainda em atividade.
    Apesar dos investimentos em piscinões e canalização de córregos, a região ainda sofre em alguns pontos isolados com as enchentes e alagamentos no  Córrego Pirajuçara principalmente em casos de chuva muito forte. As chuvas muito fortes, particularmente no verão, também provocam o deslizamento de terra em áreas onde famílias vivem precariamente, quase sempre áreas invadidas e de risco já conhecido.
Apesar da construção de Centros Educacionais Unificados (CEU), faltam mais opções de lazer e cultura para a população da área.
O trânsito também é difícil e pesado, principalmente na Avenida Carlos Lacerda, Estrada do Campo Limpo e no Largo do Campo Limpo.
</p>
<figure>
        <img src={Praca} alt="praca"/>
     </figure>
       </Container>
       </>
    )
}