import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { getOrderByUserId } from "../../services/api/orders";

function OrdersPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      getOrderByUserId(user.id).then((data) => setOrders(data));
    }
  }, [isLoaded, isSignedIn, user]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl font-medium text-slate-600">Loading your orders...</p>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed': case 'paid': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled': case 'failed': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-400/60 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 py-10 px-6 sm:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative group">
            <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-black mb-4 group-hover:scale-105 transition-transform duration-300">
              Your Orders
            </h1>
            
          </div>
          <p className="text-xl text-slate-600 mt-6 font-medium">Track and manage your purchase history</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {orders.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-12 max-w-md mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">No Orders Yet</h3>
                <p className="text-lg text-slate-600">Start shopping to see your orders here!</p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {orders.map((order, orderIndex) => (
                <div 
                  key={order._id} 
                  className="group bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.01]"
                  style={{animationDelay: `${orderIndex * 0.1}s`}}
                >
                  {/* Order Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-6 border-b border-slate-200">
                    <div className="mb-4 sm:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800">Order #{order._id.slice(-8).toUpperCase()}</h2>
                      </div>
                    </div>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(order.paymentStatus)}`}>
                      <div className="w-2 h-2 rounded-full bg-current mr-2 animate-pulse"></div>
                      {order.paymentStatus}
                    </div>
                  </div>

                  {/* Products Table */}
                  <div className="overflow-hidden rounded-2xl border border-slate-200 mb-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-slate-100 to-blue-50">
                          <tr>
                            <th className="text-left py-4 px-6 font-bold text-slate-700">Product</th>
                            <th className="text-left py-4 px-6 font-bold text-slate-700">Price</th>
                            <th className="text-left py-4 px-6 font-bold text-slate-700">Qty</th>
                            <th className="text-left py-4 px-6 font-bold text-slate-700">Total</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white/50">
                          {order.orderProducts.map((item, idx) => (
                            <tr 
                              key={idx} 
                              className="border-t border-slate-200 hover:bg-white/70 transition-colors duration-200"
                            >
                              <td className="py-4 px-6">
                                <div className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                  {item.productId?.name}
                                </div>
                              </td>
                              <td className="py-4 px-6">
                                <span className="font-medium text-slate-700">${item.productId?.price}</span>
                              </td>
                              <td className="py-4 px-6">
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                                  {item.quantity}
                                </span>
                              </td>
                              <td className="py-4 px-6">
                                <span className="font-bold text-lg text-blue-600">
                                  ${(item.quantity * item.productId?.price).toFixed(2)}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Order Total */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                      <div className="text-right">
                        <p className="text-slate-600 font-medium mb-2">Grand Total</p>
                        <p className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          ${order.orderProducts
                            .reduce((sum, item) => sum + item.quantity * item.productId?.price, 0)
                            .toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Animation */}
        {orders.length > 0 && (
          <div className="text-center mt-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
            <p className="text-lg font-medium text-slate-600">Thank you for your business! </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrdersPage;