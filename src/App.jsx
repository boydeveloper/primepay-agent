import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ForgortPasswordPage, LoginPage, RegisterPage } from "./auth/index";
import Layout from "./dashboard/layout";
import { Settings, Payouts, Customers, Overview } from "./dashboard/index";
import Account from "./dashboard/pages/settings/layout";
import AccountPanel from "./dashboard/pages/settings/pages/Account";
import Compliance from "./dashboard/pages/settings/pages/compliance";
import PayAccount from "./dashboard/pages/settings/pages/PayAccount";
import Transactions from "./dashboard/pages/transactions/Transactions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="customers" element={<Customers />} />
          <Route path="settings" element={<Settings />}>
            <Route path="account" element={<AccountPanel />} />
            <Route path="compliance" element={<Compliance />} />
            <Route path="payouts" element={<PayAccount />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
