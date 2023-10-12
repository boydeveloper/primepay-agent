import React from "react";
import TextInput from "../components/TextInput";
import { DropDownIcon } from "../../../../utils/svgs";

function PayAccount() {
  return (
    <div className="grow">
      <div className="p-6 space-y-6">
        <div className="relative">
          <label
            className="block text-md font-medium mb-1"
            htmlFor="businessType"
          >
            Bank name
          </label>
          <select
            id="businessType"
            name="businessType"
            className="block w-full rounded-md border border-gray-300 p-3 text-gray-900 shadow-sm  focus:ring-inset focus:ring-[#6686a5] focus:ring-[2px] sm:text-sm sm:leading-5 appearance-none"
          >
            <option>Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 top-[30%] right-0 flex items-center pr-2">
            <DropDownIcon />
          </div>
        </div>

        <div className="md:flex-col md:justify-between md:items-center py-3">
          <TextInput label={"Account Number"} />
        </div>
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

export default PayAccount;
