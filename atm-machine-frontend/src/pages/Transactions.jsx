import { useEffect, useState } from "react";
import { transactionsApi } from "../services/api";

const Transactions = ({ accNo, onBack }) => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await transactionsApi(accNo);

      if (res.success) {
        setTransactions(res.data);
      } else {
        setError(res.message);
      }
    } catch {
      setError("Failed to load transactions");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Mini Statement</h2>

        {error && <p style={styles.error}>{error}</p>}

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="3">No transactions found</td>
              </tr>
            ) : (
              transactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.type}</td>
                  <td>₹ {t.amount}</td>
                  <td>{new Date(t.time).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <button style={styles.backBtn} onClick={onBack}>
          Back to Dashboard
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
    width: "600px",
    padding: "25px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  backBtn: {
    marginTop: "20px",
    padding: "10px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Transactions;
