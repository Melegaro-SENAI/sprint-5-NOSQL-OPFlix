import React from 'react';
import './App.css';

import { Link } from "react-router-dom";

import '../../pages/Login/Login.css';

function App() {
  return (
    <div className="App">
      <div>
        <header className="cabecalhoPrincipal">
          <div className="container">
            
            <nav className="cabecalhoPrincipal-nav">
              <Link to='/'>Home</Link>
              <Link to='/categorias'>Categorias</Link>
              <Link to='/lancamentos'>Lançamentos</Link>
              <Link to='/login'>Login</Link>   
              <Link to='/cadastro'>Cadastrar</Link>
            </nav>
          </div>
        </header>

        <section className="conteudoImagem">
          <div>
              <h1>Quem Somos</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, omnis ipsam. Eaque magnam, animi earum aspernatur adipisci facere quasi dolorem quisquam at aliquam quae delectus reprehenderit, exercitationem rem nobis quas?</p>
            </div>
        </section>

        <main className="conteudoPrincipal">

          <section id="conteudoPrincipal-opinioes">
            <h1 id="conteudoPrincipal-eventos-titulo">Opiniões</h1>
            <div className="container">
              <nav>
                <ul className="conteudoPrincipal-dados">
                  <li className="conteudoPrincipal-dados-link-Opiniões">
                    <h2>Pessoa 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odio illum dolorem et sed voluptatum tempora modi maxime, dolor laudantium natus recusandae similique qui esse provident earum fugit.</p>
                  </li>

                  <li className="conteudoPrincipal-dados-link-Opiniões">
                    <h2>Pessoa 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odio illum dolorem et sed voluptatum tempora modi maxime, dolor laudantium natus recusandae similique qui esse provident earum fugit.</p>
                  </li>

                  <li className="conteudoPrincipal-dados-link-Opiniões">
                    <h2>Pessoa 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odio illum dolorem et sed voluptatum tempora modi maxime, dolor laudantium natus recusandae similique qui esse provident earum fugit.</p>
                  </li>

                  <li className="conteudoPrincipal-dados-link-Opiniões">
                  <h2>Pessoa 4</h2>
                  <p>Lorem ipsum dolor sit amet consecteturadipisicing elit. Alias odio illum dolorem etsed voluptatum tempora modi maxime, dolorlaudantium natus recusandae similique qui esseprovident earum fugit.</p>
                 </li>
               </ul>
            </nav>
          </div>
        </section>

        <section>
          <div className="contact-section">
            <div className="inner-width">
              <h1>Entre em contato conosco</h1>
              <input type="text" className="name" placeholder="Your Name"/>
              <input type="text" className="email" placeholder="your email"/>
              <textarea rows="1" placeholder="Mensagem" class="mensagem"></textarea>
              <button>Enviar</button>
            </div>
          </div>
        </section>
        
        </main>
        <footer className="rodapePrincipal">
          <section className="rodapePrincipal">
            <div className="container">
              <p>(11)99999-9999</p>
              <p>Av.Paulista, 3293</p>
              <p>São Paulo - SP</p>
            </div>
          </section>
        </footer>
    </div>    
  </div>
  );
}

export default App;
