import { useEffect, useState } from "react";
import { transactionsApi } from "../services/api";

export default function Transactions() {
  const accNo = localStorage.getItem("accNo");
  const [tx, setTx] = useState([]);

  useEffect(() => {
    transactionsApi(accNo).then((res) => setTx(res.data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h3>Mini Statement</h3>
      {tx.map((t) => (
        <p key={t.id}>{t.type} - ₹{t.amount}</p>
      ))}
    </div>
  );
}
