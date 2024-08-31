import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, param, type } = req.query;
  const apiKey = process.env.API_KEY;
  let url;

  const isMovie = category === 'movies';

  if (type === 'year') {
    url = `https://api.themoviedb.org/3/discover/${isMovie ? 'movie' : 'tv'}?api_key=${apiKey}&${isMovie ? 'primary_release_year' : 'first_air_date_year'}=${param}`;
  } else if (type === 'genre') {
    url = `https://api.themoviedb.org/3/discover/${isMovie ? 'movie' : 'tv'}?api_key=${apiKey}&with_genres=${param}`;
  } else {
    return res.status(400).json({ error: 'Invalid type' });
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data.results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}