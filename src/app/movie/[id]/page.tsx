import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

interface MoviePageProps {
    params: {
        id: string;
    }
}

interface MovieDetails {
    backdrop_path?: string;
    poster_path?: string;
    title?: string;
    name?: string;
    overview?: string;
    release_date?: string;
    first_air_date?: string;
    vote_count?: number;
}

export default async function MoviePage({params}: MoviePageProps): Promise<JSX.Element> {
  
  const movieId = params.id;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch movie data');
  }
  
  const movie: MovieDetails = await res.json();

  // console.log(movie); // Test console.log to see what happend with the Movie we bring

  return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            width={500}
            height={300}
            className="rounded-lg"
            alt={`Backdrop for ${movie.title || movie.name}`}
            style={{maxWidth: "100%", height: "auto"}} // To fix the issue when changing browser size
            ></Image>
        <div className="p-2">
            <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
            <p className="text-lg mb-3 text-justify">{movie.overview}</p>
            <p className="mb-3">
                <span className="font-semibold mr-1">Date Released:</span>
                {movie.release_date || movie.first_air_date}
            </p>
            <p className="flex items-center  mb-3">
                <span className="font-semibold mr-1"><FiThumbsUp className='h-5 mr-2 text-tertiary-light'/></span>
                {movie.vote_count}
            </p>
            </div>
        </div>
    </div>
  )
}
