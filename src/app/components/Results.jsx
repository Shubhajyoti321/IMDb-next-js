import Carts from "./Carts";

export default function Results({ results }) {
    return (
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto'>
            {results && results.map((result) =>
                <Carts key={result.id} result={result} />
            )}
        </div>
    )
}
