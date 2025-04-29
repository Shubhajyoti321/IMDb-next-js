import Results from "./components/Results";
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {

  const { genre } = await searchParams || "fetchTrending";

  //const genre = await searchParams?.genre || "fetchTrending" (Next bello 14);

  const endpoint = genre === 'fetchToprated' ? `/movie/top_rated` : `/trending/all/week`;

  const res = await fetch(
    `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch data....');
  }

  const results = data.results;
  // console.log(results);
  return <div>
    <ul>
      {/* {endpoint} */}
    </ul>
    <Results results={results} />
  </div>

}
