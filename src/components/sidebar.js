import React, { Component } from 'react';

class Sidebar extends Component {

    render() {
        return (
            <aside id="sidebar">
            <div id="nav-blog" className="sidebar-item">
                <h3>Criar um novo Título</h3><br/>
                <a className="btn btn-success titulo" href="#">Criar Título</a>
            </div>

            <div id="search" className="sidebar-item">
                <h3>Busca</h3>
                <p>Encontre seu artigo</p>
                <form>
                    <input type="text" name="search" />
                    <input className="btn" id="busca" type="submit" name="submit" value="Buscar" />
                </form>
            </div>
        </aside>
        );
    }
}
export default Sidebar;
