import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;
  const apiKey = process.env.API_KEY;
  const url = `https://api.themoviedb.org/3/genre/${category === 'movies' ? 'movie' : 'tv'}/list?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data.genres);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch genres' });
  }
}