import { useState } from "react";
import api from "../services/api";

function CheckBalance() {
  const [pin, setPin] = useState("");
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState("");

  const checkBalance = async () => {
    try {
      const accNo = localStorage.getItem("accNo");

      const res = await api.post(
        `/login?accNo=${accNo}&pin=${pin}`
      );

      if (res.data.success) {
        const balRes = await api.get(`/balance/${accNo}`);
        setBalance(balRes.data.data);
        setError("");
      }
    } catch (e) {
      setError("Invalid PIN");
      setBalance(null);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>Check Balance</h2>

        <input
          type="password"
          placeholder="Enter PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          style={styles.input}
        />

        <button style={styles.btn} onClick={checkBalance}>
          Verify & Show Balance
        </button>

        {balance !== null && <h3>₹ {balance}</h3>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#020617",
  },
  card: {
    width: 320,
    padding: 25,
    background: "#0f172a",
    color: "#fff",
    borderRadius: 14,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    border: "none",
  },
  btn: {
    width: "100%",
    padding: 12,
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
};

export default CheckBalance;
