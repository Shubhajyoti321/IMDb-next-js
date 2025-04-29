import Image from 'next/image';

const API_KEY = process.env.API_KEY;

export default async function MoviePage({ params }) {
    const { id } = await params;

    // Fetch movie details from the API
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);

    if (!res.ok) {
        return <p>Error: Movie not found</p>;
    }

    const movie = await res.json();

    // Use a fallback image if no backdrop or poster is found
    const imageUrl = movie.backdrop_path || movie.poster_path
        ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`
        : '/default-movie-poster.jpg'; // Add a default image in public folder for missing images

    // Use vote_average to display a rating instead of vote_count
    const rating = movie.vote_average ? movie.vote_average : 'N/A';

    return (
        <div className='w-full'>
            <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
                <Image
                    src={imageUrl}
                    width={500}
                    height={300}
                    className='rounded-lg'
                    style={{ maxWidth: "100%", height: "100%" }}
                    alt={movie.title || movie.name || "Movie Poster"}
                />
                <div className='p-2'>
                    <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name || "No title available"}</h2>
                    <p className="text-lg mb-3">{movie.overview || "No description available."}</p>
                    <p className=" mb-3"> <span>Date Released</span>:  {movie.release_date || movie.first_air_date || "Unknown"}</p>
                    <p className="flex justify-start">
                        <span className="h-5 mr-1">Rating:</span>{rating} / 10
                    </p>
                </div>
            </div>
        </div>
    );
}