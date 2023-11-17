import React from "react";
import "./sobre.css";
import Topo from "../../Componentes/Header";
import Footer from "../../Componentes/Footer";
import sobreImagem from "../../Assets/sobre-image.jpg";
import sorveteria from "../../Assets/sorveteria.jpg";
function Sobre() {
  return (
    <>
      <Topo />
      <main>
        <section className="first-section">
          <h1>A Gelateria</h1>
        </section>
        <section className="second-section">
          <div>
            <div className="header">
              <h2>Sobre Nós</h2>
              <span>Nós simplesmente amamos sorvete</span>
            </div>
            <p>
              Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
              sorvete produzido. Fazemos o melhor sorvete para os nossos
              clientes e gostamos de receber elogios. Estamos operando desde
              2009 com as melhores matérias-primas para a produção final do
              sorvete. Vendemos tanto para varejo como para atacado.
            </p>
            <p>
              <br />
              Nossos clientes podem comprar os nossos sorvetes e degustar na
              nossa loja ou levar para sua residência e aproveitar junto com a
              família. Também vendemos para estabelecimentos e criamos eventos
              como festa de aniversário, formaturas e eventos empresariais. Para
              contratar os nossos serviços, basta entrar em contato conosco.
              Iremos proporcionar o melhor atendimento e os melhores produtos
              para você fazer a sua festa mais saborosa, com o melhor sorvete da
              cidade.
            </p>
          </div>
        </section>

        <section className="third-section">
          <img src={sobreImagem} alt="Sorvete" />
          <img src={sorveteria} alt="Sorvete" />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Sobre;
