import EmptyState from "../../components/EmptyState";
import SearchInput from "../../components/searchInput";

function Payouts() {
  return (
    <div>
      <header>
        <h1 className="text-[30px] font-[600]">PAYOUT BALANCE</h1>
        <div className="font-[600] text-[20px]">₦ 0</div>
      </header>

      <main>
        <header className="mt-[30px]">
          <div className="w-[60%]">
            <SearchInput />
          </div>
        </header>
        <EmptyState message="Currently, there are no payouts to display. Transactions will appear here once they are made. " />
      </main>
    </div>
  );
}

export default Payouts;
