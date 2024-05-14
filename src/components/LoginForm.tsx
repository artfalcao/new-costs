import Link from "next/link";
import { useRouter } from 'next/router'
import { FormEvent, useState } from "react";
import { logIn } from "@/services/auth/auth.service";
import {
  Formik,
  Form,
  Field,
} from 'formik';
import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
});

interface MySignInProps {
  username: string,
  password: string
}

const initialValues: MySignInProps = {
  username: '',
  password: '',
}

const LoginForm = () => {
  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState('');
  const [alert, setAlert] = useState(false);

  const handleLogin = async (values: MySignInProps) => {
    const user = await logIn(values);
    if (user) {
      router.push('/home');
    }

    setErrorMsg('User not found! Please try again.');
    setAlert(true);
    // TO DO: show alert component with error message
  };

  return (
    <>
      <div className={`mt-12`}>
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={async (values, actions) => {
            await handleLogin(values);
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className={`flex flex-col gap-4`}>
              <label htmlFor="username" className={`block text-md font-medium leading-6 text-gray-900`}>Username</label>
              <Field
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6`}
                name="username"
              />
              {errors.username && touched.username ? (
                <div className="text-red-500">{errors.username}</div>
              ) : null}

              <div className="flex items-center justify-between">
                <label htmlFor="password" className={`block text-md font-medium leading-6 text-gray-900`}>Password</label>
                <div className="text-sm">
                  <Link
                    href='/forgotpassword'
                    className={`font-semibold text-stone-900 hover:text-stone-700`}
                  >Forgot Password?</Link>
                </div>
              </div>
              <Field
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6`}
                name="password"
              />
              {errors.password && touched.password ? (
                <div className="text-red-500">{errors.password}</div>
              ) : null}
              
              <button
                className={`mt-6 bg-yellow-400 p-2 rounded-lg font-semibold text-secondary text-md shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500`}
                type="submit"
                disabled={isSubmitting}
              >{isSubmitting ? 'Signin...' : 'Signin'}
              </button>
            </Form>
          )}
        </Formik>

        <div className={`flex gap-2 mt-4`}>
          <p className={`text-neutral-600`}>Don't have an account?</p>
          <Link
            href='/sign-up'
            className={`text-secondary font-bold`}
          >Sign Up now</Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;