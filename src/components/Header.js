import React from 'react';
import styled from 'styled-components';
import icone1 from "../img/ninjaIcon.png";
import carrinho from '../img/carrinho.png'

const MainContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #A9A9A9;
    height: 10vh;
    h1{
        margin-left: 3vw;
        color: white;
        cursor: pointer;
    }

    @media (max-width: 800px){
        width: 100vw;
    }
    
`

const Button = styled.button`
    height: 25px;
    width: 150px;
    margin-right: 2vw;
    margin-top: 5vh;
    background-color: #A9A9A9;
    border-top: none;
    border-left: none;
    border-right: none;
    color: black;
    font-size: 1rem;
     
    
    :hover{
        
        cursor: pointer;
        color: #4F4F4F    ;
        
    }
    :active{
        cursor: pointer;
        color: black    ;
    }

    @media (max-width: 800px){
        width: 50px;
        height: 225;
        font-size: 8px;
        margin-top: 3vh;

    }
`

const ContainerIcon = styled.div`
    display:flex;
    align-items: center;
    width: 157px;
    height: 48px;
    border-radius: 8px;  
    margin-left: 4vw;
    margin-top: 2vh;
    h1{
        margin-left: 0;
        @media (max-width: 800px){
            font-size: 20px;

    }
    }
    @media (max-width: 800px){
        margin-left: 0;
    }
`

const LogoHeader = styled.img`
    width:40px;
    height:40px;
    @media (max-width: 800px){
        width: 25px;
        height: 25px;

    }
`

const ImagemCarrinho = styled.img`
    margin-right: 5vw;
    width:60px;
    height:60px;
    margin-top: 1vh;
    :hover{
        cursor: pointer;
    }

    @media (max-width: 800px){
        width: 30px;
        height: 30px;
        margin-right: 0;
        margin-top:3vh;
        margin-left: 2vh;
    }
`

const Contador = styled.div`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: #DFDCEF;
    border: 1px solid #DFDCEF;
    margin-right: -9vw;
    color:  #9869BF;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px){
        width: 15px;
        height: 15px;
        font-size: 8px;
        margin-top: 1vh;

    }
`

class Header extends React.Component {
    render(){
        return(
            <MainContainerHeader>
                <ContainerIcon>
                    <LogoHeader src={icone1} />
                    <h1>LabeNinjas</h1>
                </ContainerIcon>
                <Button onClick={this.props.onClickHome} >Home</Button>
                <Button onClick={this.props.onClickAnunciar} >Anunciar Servi??o</Button>
                <Button onClick={this.props.onClickPesquisar} >Pesquisar Servi??o</Button>
                {(this.props.jobsCarrinho.length > 0) &&
                (
                <Contador>
                    {this.props.jobsCarrinho.length}
                </Contador>)
                }
                <ImagemCarrinho src={carrinho} onClick={this.props.onClickCarrinho} />
            
            </MainContainerHeader>
        )
    }
}

export default Header