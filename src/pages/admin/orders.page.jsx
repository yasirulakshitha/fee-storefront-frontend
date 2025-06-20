import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = await getToken();
        const res = await fetch("https://fee-storefront-backend-hylf.onrender.com/api/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      }
    };

    fetchOrders();
  }, [getToken]);

  return (
    <div className="min-h-screen py-16 px-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-24 right-24 w-36 h-36 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-28 left-16 w-28 h-28 bg-blue-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-600 opacity-10 rounded-full animate-ping" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-6xl font-bold text-gray-800 mb-4 relative inline-block">
            <span className="text-black">
              Manage Orders
            </span>
            
          </h1>
          <p className="text-xl text-blue-700 opacity-80">Track all customer orders in one place</p>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto rounded-2xl shadow-xl border border-blue-200">
          <table className="min-w-full text-left text-sm bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 to-blue-100 text-black uppercase tracking-wider">
                <th className="p-4 border-b border-blue-200">Order ID</th>
                <th className="p-4 border-b border-blue-200">Customer</th>
                <th className="p-4 border-b border-blue-200">Items</th>
                <th className="p-4 border-b border-blue-200">Total</th>
                <th className="p-4 border-b border-blue-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td className="text-center py-8 text-blue-600 font-medium" colSpan="5">
                    No orders found.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-t border-blue-100 hover:bg-blue-50 transition duration-300"
                  >
                    <td className="p-4 font-mono text-xs text-black font-medium">
                      {order._id}
                    </td>
                    <td className="p-4 font-semibold text-blue-800">
                      {order.address?.fname && order.address?.lname
                        ? `${order.address.fname} ${order.address.lname}`
                        : "Unknown"}
                    </td>
                    <td className="p-4 space-y-1">
                      {order.orderProducts.map((item) => (
                        <div key={item.productId?._id} className="text-blue-700">
                          {item.productId?.name} × {item.quantity}
                        </div>
                      ))}
                    </td>
                    <td className="p-4 font-bold text-blue-600">
                      ${order.orderProducts
                        .reduce((total, item) => {
                          const price = parseFloat(item.productId?.price || "0");
                          return total + price * item.quantity;
                        }, 0)
                        .toFixed(2)}
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                        {order.paymentStatus}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Animation */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-blue-600 opacity-60">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="mt-4 text-black text-lg">Stay on top of customer orders effortlessly</p>
        </div>
      </div>
    </div>
  );
};

export default AdminOrdersPage;