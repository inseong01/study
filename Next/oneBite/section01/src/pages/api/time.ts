import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const time = Date.now();

  res.json({ time: time.toLocaleString() });
}
