import React from "react";
import "../Footer/style.css";
import logo from "../../Assets/logo.png";
function Rodape() {
  return (
    <footer>
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h3>ENDEREÇO</h3>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div>
          <h3>Contato</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div>
          <h3>HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <div className="copy-right">
        <p>Galeria. Orgulhosamente desenvolvido por "Renan Luiz"</p>
      </div>
    </footer>
  );
}

export default Rodape;
