import React, { Component } from 'react';

import logo from '../assets/images/react.svg'

class Header extends Component{

    render(){
        return(
            <header id="header">
            <div className="center">
    
                {/* /* LOGO */ }
                <div id="logo">
                    <img src={logo} className="app-logo" alt="LogoTipo" />
                    <span id="brand">
                        <strong>Curso</strong>React
                    </span>
                </div>
    
                {/* MENU */}
                <nav id="menu">
                    <ul>
                        <li><a href="../Estrutura-html-projetos/index.html">Início</a></li>
                        <li><a href="../Estrutura-html-projetos/article.html">Blog</a></li>
                        <li><a href="../Estrutura-html-projetos/formulario.html">Formulário</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contato</a></li>
    
                    </ul>
                </nav>
                <div className="clearfix"></div>
            </div>
        </header>
        );
    }
}

export default Header;