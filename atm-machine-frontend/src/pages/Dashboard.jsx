import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const accNo = localStorage.getItem("accNo");

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1>ATM Dashboard</h1>
        <p>Account Number: <b>{accNo}</b></p>

        <div style={styles.grid}>
          <button style={styles.btn} onClick={() => navigate("/withdraw")}>
            Withdraw
          </button>

          <button style={styles.btn} onClick={() => navigate("/deposit")}>
            Deposit
          </button>

          <button style={styles.btn} onClick={() => navigate("/balance")}>
            Check Balance
          </button>

          <button style={styles.btn} onClick={() => navigate("/transactions")}>
            Mini Statement
          </button>
        </div>

        <button
          style={styles.logout}
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </button>
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
    background: "linear-gradient(135deg,#020617,#020617)",
  },
  card: {
    width: 420,
    padding: 30,
    borderRadius: 16,
    background: "#0f172a",
    color: "#fff",
    boxShadow: "0 20px 40px rgba(0,0,0,.6)",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 15,
    marginTop: 25,
  },
  btn: {
    padding: "14px",
    borderRadius: 10,
    border: "none",
    background: "#4f46e5",
    color: "#fff",
    fontSize: 15,
    cursor: "pointer",
  },
  logout: {
    marginTop: 25,
    width: "100%",
    padding: 14,
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontSize: 16,
    cursor: "pointer",
  },
};

export default Dashboard;
