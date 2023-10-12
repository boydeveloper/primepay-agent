import React from "react";
import EmptyState from "../../components/EmptyState";
import SearchInput from "../../components/searchInput";

function Transactions() {
  return (
    <div>
      <header>
        <h1 className="text-[30px] font-[600]">Transactions</h1>
      </header>
      <main>
        <main>
          <header className="mt-[30px]">
            <div className="w-[60%]">
              <SearchInput />
            </div>
          </header>
          <EmptyState message="Currently, there are no transactions to display. Transactions will appear here once they are made. " />
        </main>
      </main>
    </div>
  );
}

export default Transactions;
