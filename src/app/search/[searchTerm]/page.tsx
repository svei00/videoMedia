import Results from "@/components/Results";

interface SearchPageProps {
    params: {
        searchTerm: string
    }
}

interface MovieResult {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
}

interface SearchResponse {
    results: MovieResult[];
}

export default async function SearchPage({params}: SearchPageProps): Promise<JSX.Element> {
    const searchTerm = params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);

    if (!res.ok) {
        throw new Error('Failed to fetch search results');
    }

    const data: SearchResponse = await res.json();
    const results = data.results;

    return (
        <div>
            {results.length === 0 && (
                <p>No Results Found.</p>
            )}
            {results.length > 0 && (
                <Results results={results} />
            )}
        </div>
    );
}