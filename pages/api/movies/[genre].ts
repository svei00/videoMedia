import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { genre } = req.query;
  const apiKey = process.env.API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data.results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}