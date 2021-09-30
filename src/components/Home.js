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
    min-height: 80vh;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #9869BF;
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
                    <p>shfgbsdfdna shd gash gh dfh ghas ghsdfg dfasdghg gasdferdfgsfd vvdfhgsdhsdf bdsbfgnfgnsghsdf bdnsghshsdfb dbsfghsggdfv 
                        sdfgshsfdb dfgsdfgsb vsdfgsdhg shfgbsdfdna shd gash gh dfh ghas ghsdfg dfasdghg gasdferdfgsfd vvdfhgsdhsdf bdsbfgnfgnsghsdf bdnsghshsdfb dbsfghsggdfv 
                        sdfgshsfdb dfgsdfgsb vsdfgsdhg shfgbsdfdna shd gash gh dfh ghas ghsdfg dfasdghg gasdferdfgsfd vvdfhgsdhsdf bdsbfgnfgnsghsdf bdnsghshsdfb dbsfghsggdfv 
                        sdfgshsfdb dfgsdfgsb vsdfgsdhg shfgbsdfdna shd gash gh dfh ghas ghsdfg dfasdghg gasdferdfgsfd vvdfhgsdhsdf bdsbfgnfgnsghsdf bdnsghshsdfb dbsfghsggdfv 
                        sdfgshsfdb dfgsdfgsb vsdfgsdhg shfgbsdfdna shd gash gh dfh ghas ghsdfg dfasdghg gasdferdfgsfd vvdfhgsdhsdf bdsbfgnfgnsghsdf bdnsghshsdfb dbsfghsggdfv 
                        sdfgshsfdb dfgsdfgsb vsdfgsdhg shfgbsdfdna shd gash gh dfh ghas ghsdfg dfasdghg gasdferdfgsfd vvdfhgsdhsdf bdsbfgnfgnsghsdf bdnsghshsdfb dbsfghsggdfv 
                        sdfgshsfdb dfgsdfgsb vsdfgsdhg shfgbsdfdna shd gash gh dfh ghas ghsdfg dfasdghg gasdferdfgsfd vvdfhgsdhsdf bdsbfgnfgnsghsdf bdnsghshsdfb dbsfghsggdfv 
                        sdfgshsfdb dfgsdfgsb vsdfgsdhg shfgbsdfdna shd gash gh dfh ghas ghsdfg dfasdghg gasdferdfgsfd vvdfhgsdhsdf bdsbfgnfgnsghsdf bdnsghshsdfb dbsfghsggdfv 
                        sdfgshsfdb dfgsdfgsb vsdfgsdhg shfgbsdfdna shd gash gh dfh ghas ghsdfg dfasdghg gasdferdfgsfd vvdfhgsdhsdf bdsbfgnfgnsghsdf bdnsghshsdfb dbsfghsggdfv 
                        sdfgshsfdb dfgsdfgsb vsdfgsdhg</p>
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