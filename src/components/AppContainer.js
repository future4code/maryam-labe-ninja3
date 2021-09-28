import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import Anunciar from './Anunciar'
import Pesquisar from './Pesquisar'
import Detalhe from './Detalhe'
import GlobalStyle from '../theme/GlobalStyle'
import Footer from './Footer'
import styled from 'styled-components'


export class AppContainer extends Component {
  state = {
    paginaHome: true,
    paginaAnunciar: false,
    paginaPesquisar: false,
    paginaDetalhe: false
  }

  onClickAnunciar = () => {
    this.setState({paginaAnunciar: true})
    this.setState({paginaDetalhe: false})
    this.setState({paginaHome: false})
    this.setState({paginaPesquisar: false})
  }

  onClickHome = () => {
    this.setState({paginaHome: true})
    this.setState({paginaAnunciar: false})
    this.setState({paginaDetalhe: false})
    this.setState({paginaPesquisar: false})
  }

  onClickPesquisar = () => {
    this.setState({paginaPesquisar: true})
    this.setState({paginaHome: false})
    this.setState({paginaAnunciar: false})
    this.setState({paginaDetalhe: false})
  }

  onClickDetalhe = () => {
    this.setState({paginaDetalhe: true})
    this.setState({paginaPesquisar: false})
    this.setState({paginaHome: false})
    this.setState({paginaAnunciar: false})
  }

  renderizaTela = () => {
    if (this.state.paginaHome){
      return(
        <Home
        onClickAnunciar={this.onClickAnunciar}
        onClickPesquisar={this.onClickPesquisar}
        />
      )
    } else if (this.state.paginaAnunciar){
      return(
        <Anunciar/>
      )
    } else if(this.state.paginaPesquisar){
      return(
        <Pesquisar
        onClickDetalhe={this.onClickDetalhe}
        />
      )
    } else if (this.state.paginaDetalhe){
      return(
        <Detalhe/>
      )
    }
  }

  render() {
    return (
      <div>
        <GlobalStyle/>
        <Header
        onClickAnunciar={this.onClickAnunciar}
        onClickHome={this.onClickHome}
        onClickPesquisar={this.onClickPesquisar}
        />
        {this.renderizaTela()}
        <Footer/>
      </div>
    )
  }
}
