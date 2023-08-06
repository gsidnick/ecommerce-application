// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  name: string;
}

enum ResponseCode {
  'OK' = 200,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  console.log(req);

  res.status(ResponseCode.OK).json({ name: 'John Doe' });
}
