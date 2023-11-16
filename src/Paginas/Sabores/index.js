<<<<<<< HEAD
import React from "react";
import Topo from "../../Componentes/Header";
import "./sabores.css";
import Rodape from "../../Componentes/Footer";
import saberOreo from "../../Assets/sabor-oreo.png";
import sabotPistache from "../../Assets/sabor-pistache.png";
import saborCookiesAvela from "../../Assets/sabor-cookies-avela.png";
import sorbetKiwi from "../../Assets/sorbet-kiwi.png";
import sorbetMorango from "../../Assets/sorbet-morango.png";
import sorbetLimao from "../../Assets/sorbet-limao.png";
=======
//Dúvidas
//fixed
//caminho da imagem

import React from "react";
import Topo from "../../componentes/Header";
import "./sabores.css";
import Rodape from "../../componentes/Footer";
>>>>>>> a5b1eb168fba7aa7db754185d042533b5a3d46ce
function Sabores() {
  return (
    <>
      <Topo />
      <main>
        <section className="first-section">
          <div>
            <h1>Nossos Sabores</h1>
          </div>
        </section>

        <section className="second-section">
          <div className="subtitle">
            <h2>NOSSOS SABORES</h2>
          </div>
          <div className="combo-component">
            <div>
              <div className="component">
<<<<<<< HEAD
                <img src={saberOreo} alt="sabor oreo" />
=======
                <img src="Assets/sabor-oreo.png" alt="sabor oreo" />
>>>>>>> a5b1eb168fba7aa7db754185d042533b5a3d46ce
                <h3>Sorvete de Óreo</h3>
                <p>Deliocoso sorvete sabor Óreo.Uma explosão do sabor</p>
              </div>
              <div className="component">
<<<<<<< HEAD
                <img src={sabotPistache} alt="sabor pistache" />
=======
                <img src="Assets/sabor-pistache.png" alt="sabor pistache" />
>>>>>>> a5b1eb168fba7aa7db754185d042533b5a3d46ce
                <h3>Sorvete Pistache</h3>
                <p>Cremoso sorvete sabor pistache com pedacinhos de semente</p>
              </div>
              <div className="component">
<<<<<<< HEAD
                <img src={saborCookiesAvela} alt="sabor cookies avela" />
=======
                <img
                  src="Assets/sabor-cookies-avela.png"
                  alt="sabor cookies avela"
                />
>>>>>>> a5b1eb168fba7aa7db754185d042533b5a3d46ce
                <h3>Sorvete Cookie & Avelã</h3>
                <p>O nosso melhor sorvete. Você vai adorar o sabor</p>
              </div>
            </div>
            <div>
              <div className="component">
<<<<<<< HEAD
                <img src={sorbetKiwi} alt="sabor kiwi" />
=======
                <img src="Assets/sorbet-kiwi.png" alt="sabor kiwi" />
>>>>>>> a5b1eb168fba7aa7db754185d042533b5a3d46ce
                <h3>Sorvete de Kiwi</h3>
                <p>
                  Delicioso e refrescante sorvete sabor kiwi. Risco em vitamina
                  C.
                </p>
              </div>
              <div className="component">
<<<<<<< HEAD
                <img src={sorbetMorango} alt="sabor morango" />
=======
                <img src="Assets/sorbet-morango.png" alt="sabor morango" />
>>>>>>> a5b1eb168fba7aa7db754185d042533b5a3d46ce
                <h3>Sorvete de Morango</h3>
                <p>Sorvete de morango gourmet. Tradicional e saboroso</p>
              </div>
              <div className="component">
<<<<<<< HEAD
                <img src={sorbetLimao} alt="sabor limão" />
=======
                <img src="Assets/sorbet-limao.png" alt="sabor limão" />
>>>>>>> a5b1eb168fba7aa7db754185d042533b5a3d46ce
                <h3>Sorvete de Limão Siciliano</h3>
                <p>
                  O incrível sorvete gourmet de limão siciliano vai te encantar
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Rodape />
    </>
  );
}

export default Sabores;
