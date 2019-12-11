import React,{Component} from "react";

import Rodape from "../../components/Rodape";

class Categorias extends Component{

    constructor(){
        super();
        this.state = {
            lista: [
                // {idCategoria: 1, nome: 'Comédia'},
                // {idCategoria: 2, nome: 'Drama'},
                // {idCategoria: 3, nome: 'Ficção Científica'},
                // {idCategoria: 4, nome: 'Medico'},
                // {idCategoria: 5, nome: 'Terror'}
            ],
            nome: ""
        }
    }

    componentDidMount(){
        this.listarCategoria();
    }

    listarCategoria = () =>{
        fetch('http://192.168.3.47:5000/api/Categoria')
            .then(response => response.json())
            .then(data => this.setState({lista: data}));
    }

    cadastrarCategoria = (event) =>{
        event.preventDefault();

        fetch('http://192.168.3.47:5000/api/Categoria',{
            method: "POST",
            body: JSON.stringify({ nome: this.state.nome }),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer "+ localStorage.getItem("usuario-opflix")
            }
        })
            .then(response => this.listarCategoria())
            .catch(erro => console.log(erro));
    }

    nomeCategoria = (event) =>{
        this.setState({nome: event.target.value});
        console.log(this.state);
    }    

    render(){
        return(
            <div>
                <header className="conteudoPrincipal">
                    <div className="container">

                    <nav className="cabecalhoPrincipal-nav">
                        Administrador
                    </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                    <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                    <div className="container" id="conteudoPrincipal-plataformas">
                        <table id="tabela-lista">
                        <thead>
                            <tr>
                                <th>Categorias</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {this.state.lista.map(element =>{
                                return(
                                    <tr key={element.idCategoria}>
                                        <td>{element.idCategoria}</td>
                                        <td>{element.nome}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        </table>
                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">
                        Cadastrar Categoria
                        </h2>
                        <form onSubmit={this.cadastrarCategoria}>
                        <div className="container">
                            <input 
                            type="text"
                            className="className__categoria" 
                            id="input__categoria" 
                            placeholder="Nome da Categoria" 
                            value={this.state.nome} 
                            onChange={this.nomeCategoria}
                            />
                            <button
                            id="btn__cadastrar"
                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            >
                            Cadastrar
                            </button>
                        </div>
                        </form>
                    </div>
                    </section>
                </main>

                <Rodape />

                </div>
        );
    }
}

export default Categorias;