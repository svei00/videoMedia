import Results from "@/components/Results";
import MediaSection from "@/components/MediaSection";

const API_KEY = process.env.API_KEY;

interface HomeProps {
  searchParams: {
    genre?: string;
    category?: string;
    filterType?: string;
    filterValue?: string;
  };
}

export default async function Home({ searchParams }: HomeProps): Promise<JSX.Element> {
  const { genre, category, filterType, filterValue } = searchParams;

  if (category === 'watchlist' || category === 'media') {
    return (
      <MediaSection 
        category={category === 'watchlist' ? 'watchlist' : category === 'media' ? 'media' : undefined}
        filterType={filterType as 'year' | 'genre' | undefined}
        filterValue={filterValue}
      />
    );
  }

  let apiUrl = '';
  switch (genre) {
    case 'fetchTopRated':
      apiUrl = `/movie/top_rated`;
      break;
    case 'fetchTrending':
    default:
      apiUrl = `/trending/all/week`;
      break;
  }

  const res = await fetch(
    `https://api.themoviedb.org/3${apiUrl}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}