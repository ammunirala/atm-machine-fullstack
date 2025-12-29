import { useState } from "react";
import { depositApi, withdrawApi } from "../services/api";
import Transactions from "./Transactions";

const Dashboard = ({ user, onLogout }) => {
  const [balance, setBalance] = useState(user.balance);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showTx, setShowTx] = useState(false);

  const handleDeposit = async () => {
    setError("");
    setMessage("");

    if (amount <= 0) return setError("Enter valid amount");

    const res = await depositApi(user.accountNumber, amount);

    if (res.success) {
      setBalance(balance + Number(amount));
      setMessage("Deposit successful");
      setAmount("");
    } else setError(res.message);
  };

  const handleWithdraw = async () => {
    setError("");
    setMessage("");

    if (amount <= 0) return setError("Enter valid amount");

    const res = await withdrawApi(user.accountNumber, amount);

    if (res.success) {
      setBalance(balance - Number(amount));
      setMessage("Withdraw successful");
      setAmount("");
    } else setError(res.message);
  };

  if (showTx) {
    return (
      <Transactions
        accNo={user.accountNumber}
        onBack={() => setShowTx(false)}
      />
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Welcome 👋</h2>

        <p>
          <strong>Account:</strong> {user.accountNumber}
        </p>
        <p>
          <strong>Balance:</strong> ₹ {balance}
        </p>

        {error && <p style={styles.error}>{error}</p>}
        {message && <p style={styles.success}>{message}</p>}

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />

        <div style={styles.btnGroup}>
          <button style={styles.button} onClick={handleDeposit}>
            Deposit
          </button>
          <button style={styles.button} onClick={handleWithdraw}>
            Withdraw
          </button>
          <button style={styles.button} onClick={() => setShowTx(true)}>
            Transactions
          </button>
        </div>

        <button style={styles.logout} onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#eef2ff",
  },
  card: {
    width: "420px",
    padding: "30px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  btnGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#4f46e5",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  logout: {
    marginTop: "20px",
    background: "#ef4444",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  error: { color: "red" },
  success: { color: "green" },
};

export default Dashboard;
