import { useState } from "react";
import { loginApi } from "../services/api";

const Login = ({ onLoginSuccess }) => {
  const [accNo, setAccNo] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginApi(accNo, pin);

      if (res.success) {
        // 🔥 PASS USER DATA TO APP.JS
        onLoginSuccess(res.data);
      } else {
        setError(res.message);
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleLogin}>
        <h2 style={styles.title}>ATM Login</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="text"
          placeholder="Account Number"
          value={accNo}
          onChange={(e) => setAccNo(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          style={styles.input}
          required
        />

        <button style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f7fa",
  },
  card: {
    width: "320px",
    padding: "30px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#4f46e5",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "10px",
    textAlign: "center",
  },
};

export default Login;
