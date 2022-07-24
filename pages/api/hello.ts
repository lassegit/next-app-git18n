// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Intl, { defaultLocale } from '../../i18n';

type Data = {
  name: string;
  title: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const locale = req.headers['accept-language'];
  Intl.setLocale('dk');

  const title = Intl.t.formatMessage({
    id: 'api.route.name',
    defaultMessage: 'This is the hello route',
  });

  return res.status(200).json({ name: 'John Doe', title });
}
