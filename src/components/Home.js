import React from "react";
import styled from "styled-components";
import imagen from '../img/ninjaLogo2.png'

const Button = styled.button`
    width: 184px;
    height: 36px;
    padding: 6px 16px;
    background-color: #7869BF;
    border:none;
    color: white;
    border-radius: 4px;
    font-size:14px;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    transition: opacity 2s;
    margin-right: 5vw;
    margin-left: 5vw;

    :hover{
        background-color: #9869BF;
        cursor: pointer;
        color: black    ;
    }

    :active{
        background-color: ghostwhite;
        cursor: pointer;
        color: black    ;
    }
`
const MainHome = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr;
    
`

const ContainerImagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImagemLogo = styled.img`
    margin-top: 8vh;
`

const ContainerInfo = styled.div`
    margin-top: 30px;
    margin-right: 15px;
    display: flex;
    border: 1px solid #9869BF;
    border-radius: 5%;
    box-shadow: 5px 5px 5px 5px silver;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    p {
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif


    }
   
`
class Home extends React.Component{
    render(){
        return(
            <MainHome>
                <ContainerImagem>
                    <ImagemLogo className="img_main" src={imagen} />
                </ContainerImagem>
                <ContainerInfo>
                    <h2>Quem Somos</h2>
                    <p>Somos uma empresa especializada em serviços. Usamos nosso site para conectar pessoas 
                        que querem trabalhar e pessoas que querem contratar o serviço, fazendo assim com que facilite 
                        a contratação e prestacão de qualquer tipo de trabalho.
                        Totalmente pratico e seguro.
                        Utilize já!
                    </p>
                    <div>
                        <Button onClick={this.props.onClickAnunciar} >Quero ser um Ninja</Button>
                        <Button onClick={this.props.onClickPesquisar} >Contratar um Ninja</Button>
                    </div>
                </ContainerInfo>
            </MainHome>
        )
    }
}

export default Home