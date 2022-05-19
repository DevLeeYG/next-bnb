// eslint-disable
// eslint-disable-next-line
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import Data from '../../../lib/data';
import { StoredUserType } from '../../../types/user';
// eslint-disable-next-line consistent-return
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // eslint-disable-next-line object-curly-newline
    const { email, firstname, lastname, password } = req.body;
    if (!email || !firstname || !lastname || !password) {
      res.statusCode = 400;
      return res.send('필수 데이터가 없습니다.');
    }
    const userExist = Data.user.exist({ email });
    if (userExist) {
      res.status(409).send('이미 가입된 이메일입니다');
    }
    const hashedPassword = bcrypt.hashSync(password, 8);

    const users = Data.user.getList();
    let userId;
    if (users.length === 0) {
      userId = 1;
    } else {
      userId = users[users.length - 1].id + 1;
    }
    const newUser: StoredUserType = {
      id: userId,
      email,
      firstname,
      lastname,
      password: hashedPassword,
      // birthday,
    };
    Data.user.write([...users, newUser]);

    const token = jwt.sign(String(newUser.id), process.env.JWT_SECRET!);
    res.setHeader(
      'Set-Cookie',
      `access_token=${token}; path=/; expires=${new Date(
        Date.now() + 60 * 60 * 24 * 1000 * 3, // 3일
      )}; httponly`,
    );
  }
};
// const getList = () => {
//   const usersBuffer = readFileSync('data/users.json');
//   const usersString = usersBuffer.toString();
//   if (!usersString) {
//     return [];
//   }
//   const users: StoredUserType[] = JSON.parse(usersString);
//   return users;
// };
