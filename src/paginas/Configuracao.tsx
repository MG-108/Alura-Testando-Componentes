import React from "react";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Formulario from "../components/Formulario/Formulario";
import ListaParticipantes from "../components/ListaParticipantes";

const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaParticipantes />
        <Footer />
      </section>
    </Card>
  );
};

export default Configuracao;
