
import Link from "next/link";
const classBorder = 'border-solid border-2 border-black';

const LoginForm = () => {
  return (
    <>
      <div className={`mt-12`}>
        <form className={`flex flex-col gap-4`}>
          <input
            name="username"
            placeholder="Username"
            className={`py-2 pl-2 rounded-lg bg-neutral-200 placeholder:text-gray-500`}
          ></input>

          <input
            name="password"
            placeholder="Password"
            className={`py-2 pl-2 rounded-lg bg-neutral-200 placeholder:text-gray-500`}
          ></input>

          <div className={`flex justify-end mt-2`}>
            <Link
              href='/forgot-password'
              className={`font-semibold text-neutral-600 underline`}
            >Forgot Password?</Link>
          </div>

          <button
            className={`mt-4 bg-primary p-2 rounded-lg font-semibold text-secondary text-md`}
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