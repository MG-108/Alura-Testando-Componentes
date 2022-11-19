import React from "react";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

const Rodape = () => {
  const participantes = useListaDeParticipantes();

  return (
    <footer>
      <button disabled={participantes.length < 3}>Inciar brincadeira</button>
    </footer>
  );
};

export default Rodape;
