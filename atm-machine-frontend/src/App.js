import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Withdraw from "./pages/Withdraw";
import Transactions from "./pages/Transactions";
import CheckBalance from "./pages/CheckBalance";
// agar Deposit page hai to
import Deposit from "./pages/Deposit";

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* ATM Actions */}
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/balance" element={<CheckBalance />} />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
