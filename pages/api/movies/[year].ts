import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { year } = req.query;
  const apiKey = process.env.API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=${year}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data.results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}