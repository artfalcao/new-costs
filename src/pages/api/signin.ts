import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/types/user";
import db from "@/config/db";

type ResponseData = User | { msg: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  try {
    const { data:users } = await db.get('/users');
    const hasUsers = Boolean(users.length);
    const matchUser = users.find((user: User) => user.name === req.body?.username);
    if (hasUsers && matchUser) {
      const { id, ...user } = matchUser;
      res.status(200).json(user);
      return
    }
    res.status(204).json({msg: 'User not found'});
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
}
