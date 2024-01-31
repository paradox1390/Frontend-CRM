const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getConfirmCode = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}send-code`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.status !== 200) {
    throw new Error("Попробуйте залогінитися ще раз");
  }
  const data = await res.json();
};

export const sendConfirmCode = async (code) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}confirm`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: code,
  });
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error(data.message);
  } else {
    return data;
  }
};

export const register = async (userData) => {
  const res = await fetch(`${BASE_URL}registration`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: userData,
  });
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error(`${data.message}`);
  }
  localStorage.setItem("token", data.token);
  return data;
};

export const login = async (userData) => {
  const res = await fetch(`${BASE_URL}login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: userData,
  });
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error(`${data.message}`);
  }
  localStorage.setItem("token", data.token);
  return data;
};

export const getUser = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}get-user`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error(data.message);
  } else {
    return data;
  }
};
