import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-[30px] w-full flex items-center justify-center px-5">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-[#fff] shadow-md py-6 px-5 rounded-md">
        <img
          src="/assets/images/logo.png"
          className=" h-[70px] w-auto m-auto"
          alt="primepay logo"
        />
        <h1 className="text-center leading-9 text-[22px] text-[#003569] font-[600] my-2">
          Create an account
        </h1>
        <form action="" className="w-full flex flex-col gap-2 ">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="name"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6686a5] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex flex-col">
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
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="name"
                type="text"
                autoComplete="email"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6686a5] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              State of Origin
            </label>
            <div className="mt-2">
              <input
                id="email"
                name=""
                type="text"
                autoComplete="state"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6686a5] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2">
              <input
                id="number"
                name="number"
                type="text"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6686a5] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="sector"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Market sector
            </label>
            <select
              name="sector"
              id=""
              className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6686a5] sm:text-sm sm:leading-6"
            >
              <option value="commerce" selected className="p-2">
                Commerce
              </option>
              <option value="fashion">fashion</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="bvn"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              BVN
            </label>
            <div className="mt-2">
              <input
                id="bvn"
                name="bvn"
                type="number"
                autoComplete="state"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6686a5] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="bvn"
                name="password"
                type="password"
                autoComplete="state"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6686a5] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full justify-center mt-3 rounded-md bg-[#003569] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1a4978] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Regiter
          </button>
          <div className="text-center">
            Don’t have an account?{" "}
            <Link
              className="font-medium text-indigo-500 underline hover:text-indigo-600"
              style={{ color: "#003569" }}
              to="/"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
