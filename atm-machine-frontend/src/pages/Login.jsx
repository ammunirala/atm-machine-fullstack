import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [accNo, setAccNo] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const login = async () => {
    try {
      await api.post(`/login?accNo=${accNo}&pin=${pin}`);
      localStorage.setItem("accNo", accNo);
      nav("/dashboard");
    } catch (e) {
      setError(e.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>ATM Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input placeholder="Account No" onChange={(e) => setAccNo(e.target.value)} />
        <input type="password" placeholder="PIN" onChange={(e) => setPin(e.target.value)} />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

const styles = {
  container: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" },
  card: { background: "var(--card)", padding: 30, borderRadius: 12, width: 300 },
};
