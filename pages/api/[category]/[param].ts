import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, param } = req.query;
  const type = req.query.type as string;
  const apiKey = process.env.API_KEY;

  if (type === 'year') {
    const url = `https://api.themoviedb.org/3/discover/${category === 'movies' ? 'movie' : 'tv'}?api_key=${apiKey}&primary_release_year=${param}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data.results);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(400).json({ error: 'Invalid type' });
  }
}