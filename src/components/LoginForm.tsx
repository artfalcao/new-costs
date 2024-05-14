import Link from "next/link";
import { useRouter } from 'next/router'
import { FormEvent, useState } from "react";
import { logIn } from "@/services/auth/auth.service";

const LoginForm = () => {
  const router = useRouter()

  const [username, setUSerName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [alert, setAlert] = useState(false);

  const handleLogin = async(e:FormEvent) => {
    e.preventDefault();
    const user = await logIn({ username, password });
    if (user) {
      router.push('/home');
    }

    setErrorMsg('User not found! Please try again.');
    // TO DO: turn alert to TRUE and show alert component with error message
  };

  return (
    <>
      <div className={`mt-12`}>
        <form className={`flex flex-col gap-4`} onSubmit={handleLogin}>
          <input
            name="username"
            placeholder="Username"
            className={`py-2 pl-2 rounded-lg bg-neutral-200 placeholder:text-gray-500`}
            value={ username }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUSerName(e.target.value)}
          ></input>

          <input
            name="password"
            placeholder="Password"
            className={`py-2 pl-2 rounded-lg bg-neutral-200 placeholder:text-gray-500`}
            value={ password }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          ></input>

          <div className={`flex justify-end mt-2`}>
            <Link
              href='/forgot-password'
              className={`font-semibold text-neutral-600 underline`}
            >Forgot Password?</Link>
          </div>

          <button className={`mt-4 bg-primary p-2 rounded-lg font-semibold text-secondary text-md hover:bg-secondary hover:text-primary transition ease-in-out delay-150`}
          >Sign In</button>
        </form>
      </div>

      <div className={`flex gap-2 mt-4`}>
        <p className={`text-neutral-600`}>Don't have an account?</p>
        <Link
          href='/sign-up'
          className={`text-secondary font-bold`}
        >Sign Up now</Link>
      </div>
    </>
  );
};

export default LoginForm;