export const createOrder = async (data) => {
  const token = await window.Clerk?.session?.getToken();

  const res = await fetch("http://localhost:8000/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const getOrderById = async (id) => {
  const token = await window.Clerk?.session?.getToken();

  const res = await fetch(`http://localhost:8000/api/orders/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};

export const getOrderByUserId = async (userId) => {
  const token = await window.Clerk?.session?.getToken();

  const res = await fetch(`http://localhost:8000/api/orders/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};
