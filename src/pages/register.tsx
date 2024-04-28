import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";
import Link from "next/link";
import { User } from "@/models/user.model";
import { fileToBase64 } from "@/utils/helper.util";

export default function Register() {

  const { createAccount, isLoading } = useAuthContext();

  const [state, setState] = useState<User>({ email: '', password: '', displayName: '' });

  function onSubmit() {
    createAccount({ ...state }).then(() => {
      setState({ 
        email: '', 
        password: '',
        displayName: '',
        photoURL: ''
      });
    }).catch(() => {});
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    fileToBase64(event.target.files[0])?.then((res) => {
      setState({ ...state, photoURL: res });
    });
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an Account !
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4">
            <div className="w-full flex items-center justify-center">
              <label className="flex items-center justify-center w-40 h-40 border border-gray-300 text-gray-500 rounded-full">
                <input 
                  onChange={handleFileChange}
                  type="file" 
                  className="hidden"/>
                {state.photoURL ? (
                  <img 
                    className="w-full h-full rounded-full object-cover" 
                    src={state.photoURL} 
                    alt="" />
                ): (
                  <>
                    <div className="flex flex-col items-center">
                      <i className="ph ph-image text-3xl"></i>
                      <div className="text-sm pt-2">Select Photo</div>
                    </div>
                  </>
                )}
              </label>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="off"
                  required
                  value={state.email}
                  onChange={handleChange}
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="displayName"
                  placeholder="Enter your Name"
                  required
                  value={state.displayName}
                  onChange={handleChange}
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={state.password}
                  onChange={handleChange}
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="pt-5">
              <button
                type="button"
                disabled={isLoading}
                onClick={onSubmit}
                className=" flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Register Account
              </button>
            </div>
          </form>

          <p className="mt-5 text-right text-sm text-gray-500">
            Already have an account ? &nbsp;
            <Link 
              href="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
