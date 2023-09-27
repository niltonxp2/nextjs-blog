import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  text: string;
};

export default function handler(_: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.status(200).json({ text: 'Hello' });
}
