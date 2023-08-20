import type { NextApiRequest, NextApiResponse } from 'next';
import { HttpStatus } from '../lib/types';

export interface LoginProps {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // TODO Change to real
  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = (await response.json()) as string;

    res.status(HttpStatus.OK);
    res.end(JSON.stringify(data));
  } catch (err) {
    res.status(HttpStatus.UNAUTHORIZED).json({ error: 'failed to login' });
  }
}
