import { useState } from "react";
import MovieList from "../components/MovieList";

function ListaDeFilmes() {
  const [verDepois, setVerDepois] = useState(() => {
    const verDepoisSalvo = localStorage.getItem("verDepois");
    return verDepoisSalvo ? JSON.parse(verDepoisSalvo) : [];
  });
  const [assistidos, setAssistidos] = useState(() => {
    const assistidosSalvos = localStorage.getItem("assistidos");
    return assistidosSalvos ? JSON.parse(assistidosSalvos) : [];
  });

  return (
    <>
      <h2 className="font-bold text-2xl mb-4">Asisstidos</h2>
      <MovieList arr={assistidos} text="Asisstidos" />
      <h2 className="font-bold text-2xl mb-4">Ver Depois</h2>
      <MovieList arr={verDepois} text="Ver Depois" />
    </>
  );
}

export default ListaDeFilmes;
