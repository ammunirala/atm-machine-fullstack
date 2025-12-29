import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/atm",
});

export const transactionsApi = (accNo) =>
  api.get(`/transactions/${accNo}`).then((res) => res.data);

export default api;
