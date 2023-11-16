import React from "react";
<<<<<<< HEAD
import Topo from "../../Componentes/Header";
import Rodape from "../../Componentes/Footer";
import "../Home/home.css";
import bannerSabores from "../../Assets/banner-sabores.jpg";
import eventos from "../../Assets/eventos-image.jpg";
import sobreImage from "../../Assets/sobre-image.jpg";
=======
import Topo from "../../componentes/Header";
import Rodape from "../../componentes/Footer";
import "../Home/home.css";
>>>>>>> a5b1eb168fba7aa7db754185d042533b5a3d46ce
function Home() {
  return (
    <>
      <Topo />
      <main>
        <section className="secao-banner">
          <div className="div-banner">
            <h1>SORVETE ARTESANAL</h1>
          </div>
        </section>

        <section className="secao-sabores">
          <div>
            <div>
              <h2>NOSSOS SABORES</h2>
              <span>Novos e deliciosos!</span>
            </div>
            <p>
              Sorvete bom é aquele feito com os melhores ingridientes! Aqui na
              gelateira todos os nossos produtos são naturais, à base de frutas
              e sem nenhum conservante! Também temos opções sem lactose e sem
              açúcar. Venha conhecer e perceber que tem como o sorvete ser
              delicioso e saudável do mesmo tempo!
            </p>
          </div>
<<<<<<< HEAD
          <img src={bannerSabores} alt="sorvete" />
=======
          <img src="Assets/banner-sabores.jpg" alt="sorvete" />
>>>>>>> a5b1eb168fba7aa7db754185d042533b5a3d46ce
        </section>
        <section className="secao-eventos">
          <div>
            <div>
              <h2>NOSSOS EVENTOS</h2>
              <span>Delicias com sorvete!</span>
            </div>
            <p>
              Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
              prontinhos para te atender e oferecer os melhores eventos com os
              melhores sorvete da sua vida! Venha nos conhecer e passar um tempo
              aqui com a gente.
            </p>
          </div>
<<<<<<< HEAD
          <img src={eventos} alt="Sorvete" />
=======
          <img src="Assets/eventos-image.jpg" alt="Sorvete" />
>>>>>>> a5b1eb168fba7aa7db754185d042533b5a3d46ce
        </section>
        <section className="secao-sobre">
          <div>
            <div>
              <h2>SOBRE NÓS</h2>
              <span>Alegria em cada casquinha!</span>
            </div>
            <p>
              Venha tomar o melhor sorvete da região aqui com a gente! Nós
              estamos há anos no mercado produzindo o que tem de melhor para o
              nosso cliente e você não pode ficar de fora dessa. Venha nos fazer
              uma visita e aproveite o melhor atendimento e o melhor sorvete da
              cidade.
            </p>
          </div>
<<<<<<< HEAD
          <img src={sobreImage} alt="Sorvete" />
=======
          <img src="Assets/sobre-image.jpg" alt="Sorvete" />
>>>>>>> a5b1eb168fba7aa7db754185d042533b5a3d46ce
        </section>
      </main>

      <Rodape />
    </>
  );
}
export default Home;
