import Image from "next/image";
import Link from "next/link";
import { FiThmbsUp } from 'react-icons/fi';
import { FiThumbsUp } from "react-icons/fi";

export default function Carts({ result }) {
    return (
        <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 m-2 transition-shadow duration-200">
            <Link href={`/movie/${result.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path
                        }`}

                    width={500}
                    height={300}
                    className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity"
                />
                <div className="p-2">
                    <p className="line-clamp-2 text-md">
                        {result.overview}
                    </p>
                    <h2 className="text-lg font-bold truncate">{result.title || result.name}</h2>
                    <p className="flex items-center ">
                        {result.release_date}
                        <FiThumbsUp className="h-5 mr-1 ml-3" />
                        {result.vote_count}
                    </p>
                </div>

            </Link>
            {/* {result.poster_path} */}
        </div >
    )
}
