import React from "react";
import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

const Footer = () => {
  const participantes = useListaDeParticipantes();

  const navegarPara = useNavigate();

  const iniciar = () => {
    navegarPara("/sorteio");
  };

  return (
    <footer>
      <button disabled={participantes.length < 3} onClick={iniciar}>
        Inciar brincadeira
      </button>
    </footer>
  );
};

export default Footer;
