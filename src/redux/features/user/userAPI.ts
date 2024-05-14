import db from "@/config/db";
import { User } from "@/types/user";
import { getCookie } from "@/utils/cookies";

export const getUserData = async () => {
  const username = getCookie('username');
  const { data:users } = await db.get('/users');
  const hasUsers = Boolean(users.length);
  const matchUser = users.find((user: User) => user.name === username);
  if (hasUsers && matchUser) {
    const { id, ...user } = matchUser;
    return user;
  }
  return null;
};