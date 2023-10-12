import { useState } from "react";

import Sidebar from "../../dashboard/components/Sidebar";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-100 h-screen w-full flex items-center justify-center px-5">
        <div className="w-full">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-[#fff] shadow-md py-6 px-6 rounded-md">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-[70px] w-auto"
                src="/assets/images/logo.png"
                alt="primepay logo"
              />
              <h1 className="text-center leading-9  text-[20px] text-[#003569] font-[600] my-1">
                Sign in to your account
              </h1>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                className="flex flex-col gap-[30px]"
                action="#"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6686a5] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-[#00305f] underline hover:text-[#002a54]"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6686a5] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate("/dashboard/overview")}
                  className="flex w-full justify-center rounded-md bg-[#003569] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1a4978] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>

                <div className="text-center">
                  Don’t have an account?{" "}
                  <Link
                    className="font-medium text-indigo-500 underline hover:text-indigo-600"
                    style={{ color: "#003569" }}
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
