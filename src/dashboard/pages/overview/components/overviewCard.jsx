function OverviewCard({ item }) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-xl border border-slate-200">
      <div className=" bg-card text-card-foreground  p-6">
        <header className="flex text-[#000] justify-between items-start mb-2 tracking-tight text-sm font-medium">
          {item.title}
          <img
            src={item.icon}
            className=" h-[18px] w-[18px] sm:h-[24px] ms:w-[24px]"
          />
        </header>

        <div className=" text-[#000] text-lg sm:text-2xl font-bold uppercase mb-1 whitespace-nowrap">
          {`${item.title === "Sales Count" ? "+" : ""}${item.amount}`}
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
