import React from 'react';
import styled from 'styled-components';

const MainContainerFooter = styled.div`
    background-color: #9869BF;
    height: 10vh;
    /* position: fixed;
    bottom: 0;
    right: 0;
    left: 0; */
    
    .page-wrap:after{
        height: 10vh;
    }
/* 
    .page-wrap:after {
  height: 60px; 
}
     */
    h3{
        margin-left: 3vw;
        color: #DFDCEF;
    }
`

class Footer extends React.Component{
    render(){
        return(
            <MainContainerFooter>
                <h3>Eu sou o Footer</h3>
            </MainContainerFooter>
        )
    }
}

export default Footer