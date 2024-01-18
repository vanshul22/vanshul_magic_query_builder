import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


const ForgotPassword = () => {
  const [form, setForm] = useState({ email: "" });
  const navigate = useNavigate();

  const forgotPasswordFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Sending Mail to your account...");

    setTimeout(() => {
      toast.success("Successfully Sent Email", { id: toastId });
      setTimeout(() => navigate('/'), 1000);
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
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to="https://www.orbiosolutions.com" target='_blank' className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white" >
          <img className="w-auto h-16 mr-2" src="https://www.orbiosolutions.com//wp-content/uploads/2021/03/orbioLogo.png" alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Forgot your password?</h1>

            {/* Forgot Password Section */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <form onSubmit={forgotPasswordFunc} className="flex flex-col gap-5">
                <label htmlFor="email" className="">Enter your email or username to reset your password:</label>

                <input value={form.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="name@company.com" required={true} onChange={handleOnChange} />

                <button type="submit" className="w-full text-white dark:text-secondary hover:text-primary bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary-300 border border-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Reset Password
                </button>
              </form>


              {/* Link to Sign-In Page */}
              <p className="mt-10">
                Remember your password?{' '}
                <Link to="/auth/signin" className="text-primary hover:underline dark:text-primary">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword;