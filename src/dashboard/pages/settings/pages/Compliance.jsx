function Compliance() {
  return (
    <div className="w-full">
      <div className="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
        <div className="flex flex-col h-full p-5">
          <div className="grow">
            <img
              className="h-[40px] w-[40px]"
              src="/assets/svgs/id-card-outline.svg"
              alt="IDentification Card"
            />
            <header className="flex items-center mb-4">
              <h3 className="text-xl text-slate-800 font-semibold">
                IDentification Card
              </h3>
            </header>
          </div>
          <footer className="mt-4">
            <div className="flex flex-wrap gap-2 items-center">
              <button className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                <span>Preview</span>
              </button>
              <button
                style={{ backgroundColor: "#003569" }}
                aria-controls="feedback-modal"
                type="button"
                className="inline-flex justify-center gap-x-1.5 rounded-md btn-sm text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <svg
                  className="-ml-0.5 h-5 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                </svg>
                Upload
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Compliance;
