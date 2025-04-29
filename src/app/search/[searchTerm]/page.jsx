import Results from "@/app/components/Results";

const API_KEY = process.env.API_KEY;

export default async function SearchPage({ params }) {

    const { searchTerm } = await params;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);

    if (!res.ok) {
        return <p>Error: Movie not found</p>;
    }

    const data = await res.json();

    const results = await data.results;


    return (
        <div>
            {results && results.length === 0 ? (
                <h1 className="text-center pt-6">No result found</h1>
            ) :
                (results && <Results results={results} />)
            }
        </div>
    )
}
