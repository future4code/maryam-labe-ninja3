import React from 'react';
import styled from 'styled-components';
import Home from './Home';

const MainContainerFooter = styled.div`
    background-image: linear-gradient(to bottom, #808080, black);
    
    .page-wrap:after{
        height: 20vh
    }

    display: flex;
    justify-content: space-between;
    
    img{
        width: 80px;
        height: 80px;
        
    }
    p{
        font-size: 15px;
        color: white;
        margin-left: 15px;
    }
    
    @media (max-width: 800px){
    width: 100vh;
    text-align: center;
    padding: 10px;
}

`
const FooterColunaEsq = styled.div`
display: flex;
align-items: center;
margin-left: 30px;
`
const FooterColunaDir = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-right: 20px;
`
const ColunaLinks = styled.div`
display: grid;
grid-template-columns: 1fr;

`
const ColunaRedesSociais = styled.div`
display: flex;
justify-content: space-between;
img {
    width: 40px;
    height: 40px;
    margin: 0 15px;
}
@media (max-width: 800px) {

}

`


class Footer extends React.Component{
    render(){
        return(
            <MainContainerFooter>
                
                <FooterColunaEsq>
                    <a href='./components/Home'><img src = "https://rude-yoke.surge.sh/static/media/ninjaIconOutline.8ba90ce1.png" /></a>
                    <ColunaLinks>
                        <p>LabeNinjas</p>
                        <p>Entre em contato</p>
                        <p>Perguntas frequentes</p>
                        <ColunaRedesSociais>
                        <a href="https://github.com/future4code/maryam-labe-ninja3" target="blank"><img src="https://luxuriant-pocket.surge.sh/anexos/github.png" /> </a>
                        <a href="https://twitter.com/home" target="blank"><img src="https://luxuriant-pocket.surge.sh/anexos/twitter.png" /> </a>
                        <a href="https://www.instagram.com/" target="blank"><img src="https://luxuriant-pocket.surge.sh/anexos/instagram.png" /></a>
                        </ColunaRedesSociais>
                    </ColunaLinks>
                </FooterColunaEsq>
                <FooterColunaDir>
                    <p>Criado por Gabriel Manoel, Luiz Ricardo da Silva, Roberval Dionisio, Silvio Ribeiro e Sthefane Oliveira</p>
                    <p>Curso Web Full Stack na Labenu</p>
                    <p>© 2021 LabeNinjas serviços S.A - Instituição fictícia de serviços</p>
                </FooterColunaDir>
            </MainContainerFooter>
        )
    }
}

export default Footer