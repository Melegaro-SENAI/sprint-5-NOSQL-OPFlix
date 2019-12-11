import React,{Component} from "react";

import Rodape from "../../components/Rodape";

class Lancamentos extends Component{

    constructor(){
        super();
        this.state = {
            lista: [],
            nome: ""
        }
    }

    componentDidMount(){
        this.listarLancamentos();
    }

    listarLancamentos = () =>{
        fetch('http://192.168.3.47:5000/api/Lancamento')
            .then(response => response.json())
            .then(data => this.setState({lista: data}));
    }

    cadastrarLancamentos = (event) =>{
        event.preventDefault();

        fetch('http://192.168.3.47:5000/api/Lancamento',{
            method: "POST",
            body: JSON.stringify({ nome: this.state.nome }),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer "+ localStorage.getItem("usuario-opflix")
            }
        })
            .then(response => this.listarLancamentos())
            .catch(erro => console.log(erro));
    }

    nomeLancamentos = (event) =>{
        this.setState({nome: event.target.value});
        console.log(this.state);
    }  

    sinopseLancamentos = (event) =>{
        this.setState({sinopse: event.target.value});
        console.log(this.state);
    }

    dataLancamentos = (event) =>{
        this.setState({data: event.target.value});
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
                    <h1 className="conteudoPrincipal-cadastro-titulo">Lancamentos</h1>
                    <div className="container esquerda" id="conteudoPrincipal-plataformas">
                        <table id="tabela-lista">
                        <thead>
                            <tr>
                                <th>Lançamento</th>
                                <th>Sinopse</th>
                                <th>Data de Lançamento</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {this.state.lista.map(element =>{
                                return(
                                    <tr key={element.idLancamentos}>
                                        <td>{element.nome}</td>
                                        <td>{element.sinopse}</td>
                                        <td>{element.data}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        </table>
                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">
                        Cadastrar Lancamentos
                        </h2>
                        <form onSubmit={this.cadastrarLancamentos}>
                        <div className="container">
                        <input 
                            type="text"
                            className="className__lancamentos" 
                            id="input__lancamentos" 
                            placeholder="Lançamento" 
                            value={this.state.nome} 
                            onChange={this.nomeLancamentos}
                            />
                            <input 
                            type="text"
                            className="className__lancamentos" 
                            id="input__lancamentos" 
                            placeholder="Sinopse" 
                            value={this.state.sinopse} 
                            onChange={this.sinopseLancamentos}
                            />
                            <input 
                            type="text"
                            className="className__lancamentos" 
                            id="input__lancamentos" 
                            placeholder="Data Lançamento" 
                            value={this.state.data} 
                            onChange={this.dataLancamentos}
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

export default Lancamentos;