const BASE_URL = "http://localhost:8080/atm";

export const transactionsApi = async (accNo) => {
  const res = await fetch(`${BASE_URL}/transactions/${accNo}`, {
    method: "GET",
  });
  return res.json();
};


export const loginApi = async (accNo, pin) => {
  const res = await fetch(`${BASE_URL}/login?accNo=${accNo}&pin=${pin}`, {
    method: "POST",
  });
  return res.json();
};

export const depositApi = async (accNo, amount) => {
  const res = await fetch(
    `${BASE_URL}/deposit?accNo=${accNo}&amount=${amount}`,
    { method: "POST" }
  );
  return res.json();
};

export const withdrawApi = async (accNo, amount) => {
  const res = await fetch(
    `${BASE_URL}/withdraw?accNo=${accNo}&amount=${amount}`,
    { method: "POST" }
  );
  return res.json();
};
