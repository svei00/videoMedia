import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, year } = req.query;
  const apiKey = process.env.API_KEY;
  let url;

  if (category === 'movies') {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=${year}`;
  } else if (category === 'series') {
    url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&first_air_date_year=${year}`;
  } else {
    return res.status(400).json({ error: 'Invalid category' });
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data.results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}