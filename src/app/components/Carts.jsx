import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Carts({ result }) {
    const imagePath = result.backdrop_path || result.poster_path;
    const imageUrl = imagePath
        ? `https://image.tmdb.org/t/p/original/${imagePath}`
        : "/fallback.jpg"; // a safe fallback image

    return (
        <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 m-2 transition-shadow duration-200">
            <Link href={`/movie/${result.id}`}>
                {imagePath ? (
                    <Image
                        alt={result.title || result.name || "Movie poster"}
                        src={imageUrl}
                        width={500}
                        height={300}
                        className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity"
                        loading="lazy"  // Lazy load enabled by default
                    //placeholder="blur" // Use the blur effect until image loads
                    //blurDataURL="/placeholder.jpeg"  
                    // Add a small placeholder image as base64 or URL
                    />
                ) : (
                    <div className="w-full h-[120px] bg-gray-300 flex items-center justify-center text-gray-500">
                        No Image Available
                    </div>
                )}
                <div className="p-2">
                    <p className="line-clamp-2 text-md">
                        {result.overview}
                    </p>
                    <h2 className="text-lg font-bold truncate">{result.title || result.name}</h2>
                    <p className="flex items-center">
                        {result.release_date}
                        <FiThumbsUp className="h-5 mr-1 ml-3" />
                        {result.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    )
}