import { useState } from "react";
import api from "../services/api";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");

  const withdraw = async () => {
    try {
      const accNo = localStorage.getItem("accNo");
      const res = await api.post(
        `/withdraw?accNo=${accNo}&amount=${amount}`
      );
      setMsg(res.data.message);
    } catch (e) {
      setMsg(e.response?.data?.message || "Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Withdraw Money</h2>

        <input
          style={styles.input}
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button style={styles.btn} onClick={withdraw}>
          Withdraw
        </button>

        {msg && <p style={styles.msg}>{msg}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "radial-gradient(circle at top, #1e293b, #020617)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "360px",
    padding: "30px",
    borderRadius: "14px",
    background: "#0f172a",
    color: "#fff",
    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "16px",
  },
  btn: {
    marginTop: "20px",
    width: "100%",
    padding: "12px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  msg: {
    marginTop: "15px",
    color: "#38bdf8",
  },
};

export default Withdraw;
