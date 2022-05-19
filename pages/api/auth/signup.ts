// eslint-disable
// eslint-disable-next-line
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import Data from '../../../lib/data';
import { StoredUserType } from '../../../types/user';

// eslint-disable-next-line consistent-return
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, firstname, lastname, password, birthday } = req.body;
    if (!email || firstname || lastname || password || birthday) {
      return res.status(400).send('필수데이터가 없습니다.');
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
      birthday,
      profileImage: '/static/image/user/default_user_profile_image.jpg',
    };
    Data.user.write([...users, newUser]);
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
