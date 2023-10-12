import { ProfileIcon } from "../../../../utils/svgs";
import TextInput from "../components/TextInput";

function AccountPanel() {
  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex items-center gap-3">
        <ProfileIcon />
        <label
          htmlFor="p-photo"
          type="button"
          className="rounded-md cursor-pointer  bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Change
        </label>
      </div>
      <div className="sm:flex gap-2  space-y-4 sm:space-y-0 sm:space-x-4   mt-5">
        <TextInput label={"First Name"} />
        <TextInput label={"Last Name"} />
      </div>

      <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
        <div className="sm:w-1/2">
          <TextInput label={"Email Adress"} />
        </div>
        <div className="sm:w-1/2 items-center">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="businessType"
          >
            Market Sector
          </label>
          <select
            id="businessType"
            name="businessType"
            className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6686a5] sm:text-sm sm:leading-6"
          >
            <option>Select</option>
            <option>Select</option>
            <option>Select</option>
          </select>
        </div>
      </div>

      <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
        <TextInput label={"Address"} />
        <TextInput label={"State of Origin"} />
      </div>

      <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
        <TextInput label={"Bussiness Name"} />
        <TextInput label={"Bussiness Name"} />
      </div>
      <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
        <TextInput label={"Bussiness Name"} />
        <TextInput label={"Bussiness Name"} />
      </div>
      <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
        <TextInput label={"Bussiness Name"} />
        <TextInput label={"Bussiness Name"} />
      </div>
      <div className="flex flex-col px-6 py-5 border-t border-slate-200">
        <div className="flex self-end">
          <button className="btn bg-[#003569] text-white ml-3 mt-2 rounded-sm py-2 px-3">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountPanel;
