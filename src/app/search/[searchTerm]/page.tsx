import { GetServerSideProps } from 'next';
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
    popularity: number;
    original_language: string;
    original_title: string;
    genre_ids: number[];
}

interface SearchResponse {
    results: MovieResult[];
}

export default async function SearchPage({params}: SearchPageProps): Promise<JSX.Element> {
    const searchTerm = params.searchTerm;
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        console.error('API_KEY is not set');
        return <div>Error: API key is missing</div>;
    }

    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchTerm)}&language=en-US&page=1&include_adult=false`);

        if (!res.ok) {
            throw new Error(`Failed to fetch search results: ${res.status} ${res.statusText}`);
        }

        const data: SearchResponse = await res.json();
        const results = data.results;

        return (
            <div>
                {results.length === 0 ? (
                    <p>No Results Found.</p>
                ) : (
                    <Results results={results} />
                )}
            </div>
        );
    } catch (error) {
        console.error('Error fetching search results:', error);
        return <div>Error: Failed to fetch search results</div>;
    }
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (context) => {
    return {
        props: {
            params: {
                searchTerm: context.params?.searchTerm as string || '',
            },
        },
    };
};