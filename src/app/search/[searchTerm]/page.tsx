import { Suspense } from 'react';
import Results from "@/components/Results";

interface SearchPageProps {
    params: {
        searchTerm: string
    }
}

interface Movie {
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
    video: boolean;
    adult: boolean;
}

interface SearchResponse {
    results: Movie[];
}

async function fetchSearchResults(searchTerm: string): Promise<Movie[]> {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        console.error('API_KEY is not set');
        return [];
    }

    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchTerm)}&language=en-US&page=1&include_adult=false`);

        if (!res.ok) {
            throw new Error(`Failed to fetch search results: ${res.status} ${res.statusText}`);
        }

        const data: SearchResponse = await res.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
    }
}

export default async function SearchPage({ params }: SearchPageProps) {
    const searchTerm = params.searchTerm;
    const results = await fetchSearchResults(searchTerm);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                {results.length === 0 ? (
                    <p>No Results Found.</p>
                ) : (
                    <Results results={results} />
                )}
            </div>
        </Suspense>
    );
}