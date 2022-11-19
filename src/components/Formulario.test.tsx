import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

describe("o comportomento do Formulario.tsx", () => {
  test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
    // encontrar o botão
    const botao = screen.getByRole("button");
    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    //garantir que o botao esteja desabilitadoa
    expect(botao).toBeDisabled();
  });

  test("adicionar um participante caso exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
    // encontrar o botão
    const botao = screen.getByRole("button");

    //inserir um valor no input
    fireEvent.change(input, {
      target: { value: "Ana" },
    });

    //clicar no botao de submeter
    fireEvent.click(botao);
    // garintir que o input esteja com o foco ativo
    expect(input).toHaveFocus();
    //garantir que o input não tenha um valor
    expect(input).toHaveValue("");
  });

  test("nomes duplicados não podem ser add na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText("Insira os nomes dos participantes");

    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: { value: "Ana" },
    });

    fireEvent.click(botao);
    fireEvent.change(input, {
      target: { value: "Ana" },
    });

    fireEvent.click(botao);

    const mensagemDeErro = screen.getByRole("alert");

    expect(mensagemDeErro.textContent).toBe("nomes duplicados não são permitidos");
  });

  test("a mensagem de erro deve sumir após os timers", () => {
    act(() => {
      jest.useFakeTimers();
    });
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText("Insira os nomes dos participantes");

    const botao = screen.getByRole("button");

    fireEvent.change(input, {
      target: { value: "Ana" },
    });

    fireEvent.click(botao);
    fireEvent.change(input, {
      target: { value: "Ana" },
    });

    fireEvent.click(botao);
    let mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeInTheDocument();

    act(() => {
      /* fire events that update state */
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeNull();
  });
});
