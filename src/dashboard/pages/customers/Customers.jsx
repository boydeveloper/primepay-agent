import React from "react";
import EmptyState from "../../components/EmptyState";
import SearchInput from "../../components/searchInput";

function Customers() {
  return (
    <div>
      <header>
        <h1 className="text-[30px] font-[600]">Customers</h1>
      </header>
      <main>
        <header className="mt-[30px]">
          <div className="w-[60%]">
            <SearchInput />
          </div>
        </header>
        <EmptyState message="Currently, there are no customers to display. customers will appear here once they patronize you. " />
      </main>
    </div>
  );
}

export default Customers;
