import { Link } from "react-router-dom";
import { useState, useEffect } from "react"


export default function MovieCard({ title, poster_path ,backdrop_path, overview  }) {
    const[filmes,setfilmes] = useState([])
    useEffect(() => {   
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
        .then(res => res.json())
        .then(res=> setfilmes(res.results))
        .catch(erro => console.log(erro))
        .finally(() => console.log("Fim!"))
     }, [])
    return (
        <div className="flex gap-6 w">
            {
                    filmes.map((filme) => 
                        <div>
                        <h1>{filme.title}</h1>
                        <img src= {`https://image.tmdb.org/t/p/w185${filme.poster_path}`}/>
                        
                        
                        </div>
                        
                    )
                }
            
        </div>
    )

}