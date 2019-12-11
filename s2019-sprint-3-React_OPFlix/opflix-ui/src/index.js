import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// pages
import App from './pages/Home/App';
import Lancamentos from './pages/Lancamentos/Lancamentos';
import NaoEncontrado from './pages/NaoEncontrado/NaoEncontrado';
import Login from './pages/Login/Login';
import Categorias from './pages/Categorias/Categorias';
import Cadastro from './pages/Cadastro/Cadastro';
import Localizacao from './pages/Localizacao/Localizacao';

// routes
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

const RotaPrivada = ({component: Component}) => (
    <Route
        render={ props =>
            localStorage.getItem("usuario-opflix") !== null  ?
            (
                <Component {...props}/>
            ) : (
                <Redirect
                    to={{pathname: "/categorias", state: {from: props.location}}}
                    to={{pathname: "/lancamentos", state: {from: props.location}}}
                />
            )
        }
    />
);


const routing = (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <RotaPrivada path='/categorias' component={Categorias} />
            <Route path='/lancamentos' component={Lancamentos} />
            <Route path='/login' component={Login} />
            <Route path='/cadastro' component={Cadastro} />
            <Route path='/localizacao' component={Localizacao} />
            <Route component={NaoEncontrado}/>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
