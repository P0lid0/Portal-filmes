import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// 'https://api.themoviedb.org/3/find/external_id?external_source=
export default function MovieDetailPage() {
  const { id } = useParams();
  const [filme, setfilme] = useState({});
  const [atores, setAtores] = useState([]);
  const [trailer, setTrailer] = useState({ results: [{ key: "" }] });
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br&with_cast=and`
    )
      .then((res) => res.json())
      .then((res) => setTrailer(res))
      .catch((erro) => console.log(erro))
      .finally(() => console.log("Fim!"));
  }, []);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br&with_cast=and`
    )
      .then((res) => res.json())
      .then((res) =>
        setAtores(res.cast.filter((e) => e.known_for_department == "Acting"))
      )
      .catch((erro) => console.log(erro))
      .finally(() => console.log("Fim!"));
  }, []);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br&with_cast=and`
    )
      .then((res) => res.json())
      .then((res) => setfilme(res))
      .catch((erro) => console.log(erro))
      .finally(() => console.log("Fim!"));
  }, []);
  console.log();
  return (
    <div
      className={`flex flex-col items-center gap-2 p-4 bg-[url('https://image.tmdb.org/t/p/w1280${filme.backdrop_path}')]`}
    >
      <h1 className="font-bold text-3xl mb-2">{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w185${filme.poster_path}`}
        className="w-48"
      />
      <p
        className={
          filme.vote_average * 10 >= 60
            ? "text-green-600 text-xl font-bold"
            : filme.vote_average * 10 >= 40
            ? "text-yellow-600 text-xl font-bold"
            : "text-red-600 text-xl font-bold"
        }
      >
        {filme.vote_average * 10}%
      </p>
      <p className="w-2/4 text-justify">{filme.overview}</p>
      <p className="mt-[-8px] text-gray-400">{filme.release_date}</p>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${trailer.results[0].key}`}
        title="Deadpool &amp; Wolverine | Trailer 2 Oficial Dublado"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h2 className="font-bold text-2xl">Creditos</h2>
      <div className="flex flex-wrap gap-4">
        {atores.map((data) => (
          <div key={data.id}>
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
