import { NextApiRequest, NextApiResponse } from 'next';
import Data from '../../../lib/data';

// eslint-disable-next-line consistent-return
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // eslint-disable-next-line object-curly-newline
    const { email, firstname, lastname, password, birthday } = req.body;
    if (!email || firstname || lastname || password || birthday) {
      return res.status(400).send('필수데이터가 없습니다.');
    }
    const userExist = Data.user.exist({ email });
    if (userExist) {
      res.status(409).send('이미 가입된 이메일입니다');
    }
  }
};
