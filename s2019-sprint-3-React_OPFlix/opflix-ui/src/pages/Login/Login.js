import React, { Component } from "react";

import Axios from 'axios';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            senha: "",
            erro: ""
        }
    }

    mudarEstadoEmail = (event) => {
        this.setState({ email: event.target.value })
     }

    mudarEstadoSenha = (event) => {
        this.setState({ senha: event.target.value })
    }

    efetuarLogin = (event) => {
        event.preventDefault();
        console.log(this.state)

        Axios.post('http://192.168.3.47:5000/api/login', {
            Email: this.state.email,
            Senha: this.state.senha
        })
            .then(data => {
                console.log(data);
                if (data.status === 200) {
                    // console.log(data.data);
                    // console.log(data.data.token);
                    localStorage.setItem("usuario-opflix", data.data.token);
                    this.props.history.push('/categorias');
                } else {
                    alert("erro")
                }
            })
            .catch(erro => {
                this.setState({ erro: "Usuario ou senha inválido" });
                console.log(erro);
            })
    }

    render() {
        return (
            <section className="container body">
                <div className="img_login"></div>
                <div className="img_overplay"></div>

                <div className="body">
                    <div className="row">
                        <div className="body">

                        </div>
                        <div className="titulo__login" id="titulo">
                        </div>
                        <form onSubmit={this.efetuarLogin}>
                            <div className="box">
                            <h1>Login</h1>
                                <input
                                    className="input__login"
                                    placeholder="email"
                                    type="text"
                                    name="username"
                                    id="login__email"
                                    onChange={this.mudarEstadoEmail}
                                    value={this.state.email}
                                    />
                                <input
                                    className="input__login"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    id="login__password"
                                    onChange={this.mudarEstadoSenha}
                                    value={this.state.senha}
                                    />
                                <input
                                    className="input__login"
                                    type="submit"
                                    name=""
                                    value="Login">
                                </input>
                        </div>
                            <p
                                className="text__login"
                                style={{ color: "red", textAlign: "center" }}
                                >
                                {this.state.erro}
                            </p>
                                </form>
                    </div>
                </div>
            </section>
        );
    }
}
