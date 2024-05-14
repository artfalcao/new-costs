import api from "@/config/api";
import { User } from '@/types/user';

type LoginData = {
  username: string,
  password: string
};

export const logIn = async( logInData: LoginData ): Promise<User | undefined> => {
  const {status, data} = await api.post('/signin', logInData);
  if (status == 200) {
    document.cookie = `username=${data?.name}; path=/`;
    return data;
  } else return;
};