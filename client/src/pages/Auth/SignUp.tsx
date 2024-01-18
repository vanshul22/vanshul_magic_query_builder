import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetcher } from '@/lib/customHooks/fetcher';
const VITE_API_URL = import.meta.env.VITE_API_URL;


const SignUp = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const signUpFunc = async (e: React.FormEvent<HTMLFormElement>) => {

    const toastId = toast.loading("Creating your account...");
    e.preventDefault();

    const response: NodeResponse<{ token: string }> = await fetcher(VITE_API_URL + "api/users", { method: "POST", body: { "email": form.email, "password": form.password, "username": form.username } });

    setTimeout(() => {
      if (response.success) {
        navigate('/auth/signin');
        toast.success(response.message, { id: toastId });
      } else {
        toast.error(response.message, { id: toastId });
      }
    }, 2000);
  }


  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };


  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link to="https://www.orbiosolutions.com" target='_blank' className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white" >
            <img className="w-auto h-16 mr-2" src="https://www.orbiosolutions.com//wp-content/uploads/2021/03/orbioLogo.png" alt="logo" />
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> Sign Up to your account </h1>

              <form className="space-y-4 md:space-y-6" onSubmit={signUpFunc}>

                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Your Username</label>
                  <input type="text" value={form.username} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company" required={true} onChange={handleOnChange} />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Your Email</label>
                  <input type="email" value={form.email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} onChange={handleOnChange} />
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" > Password </label>
                  <input type="password" value={form.password} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} onChange={handleOnChange} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300 cursor-pointer" > Remember me </label>
                    </div>
                  </div>
                  <Link to="/auth/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500" > Forgot password? </Link>
                </div>

                <button type="submit" className="w-full text-white dark:text-secondary hover:text-primary bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-white">
                  Sign Up
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400"> Already have an account? &nbsp;
                  <Link to="/auth/signin" className="font-medium text-primary hover:underline dark:text-primary" > Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp;