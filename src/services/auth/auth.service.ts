import api from "@/config/api"

type LoginData = {
  username: string,
  password: string
}

export const logIn = async( logInData: LoginData ) => {
  return await api.post('/sign-in', logInData);
};