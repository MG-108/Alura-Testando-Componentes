// src/componentes/Cabecalho/index.tsx
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="imagem-logo" role="img" aria-label="Logo do Sorteador"></div>
      <img
        className="participante"
        src="/imagens/participante.png"
        alt="Participante com um presente na mão"
      />
    </header>
  );
};

export default Navbar;
