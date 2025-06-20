import { useContext, useState } from "react";
import TextInput from "../../components/Textinput";
import { CartContext } from "../../context/cartContext";
import { createOrder } from "../../services/api/orders";
import { useUser } from "@clerk/clerk-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function CheckoutPage() {
  const { user, isSignedIn, isLoaded } = useUser();
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    line_1: "",
    line_2: "",
    city: "",
    phone: "",
  });

  if (!isLoaded) {
    return <div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const order = await createOrder({
        userId: user.id,
        orderProducts: cart.map((el) => ({
          productId: el._id,
          quantity: el.count,
        })),
        address: {
          fname: formData.fname,
          lname: formData.lname,
          line_1: formData.line_1,
          line_2: formData.line_2,
          city: formData.city,
          phone: formData.phone,
        },
      });
      clearCart();
      toast.success("Successfully placed order!");
      navigate(`/payment?orderId=${order._id}`);
    } catch (error) {
      toast.error("Order placement failed. Please try again later.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative group">
            <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-black mb-4 group-hover:scale-105 transition-transform duration-300">
              Checkout
            </h1>
            
          </div>
          <p className="text-xl text-slate-600 mt-6 font-medium">Complete your order with secure checkout</p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-8 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Shipping Information</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <TextInput
                    onChange={handleChange}
                    name="fname"
                    required={true}
                    label="First Name"
                    value={formData.fname}
                    placeholder="John"
                  />
                  <TextInput
                    onChange={handleChange}
                    name="lname"
                    required={true}
                    label="Last Name"
                    value={formData.lname}
                    placeholder="Doe"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <TextInput
                    onChange={handleChange}
                    name="line_1"
                    required={true}
                    value={formData.line_1}
                    label="Address Line 1"
                    placeholder="123 Main St"
                  />
                  <TextInput
                    onChange={handleChange}
                    name="line_2"
                    required={true}
                    label="Address Line 2"
                    value={formData.line_2}
                    placeholder="Westside"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <TextInput
                    onChange={handleChange}
                    name="city"
                    required={true}
                    value={formData.city}
                    label="City"
                    placeholder="New York"
                  />
                  <TextInput
                    onChange={handleChange}
                    name="phone"
                    required={false}
                    value={formData.phone}
                    label="Phone Number"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                
                <button
                  type="submit"
                  className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Proceed to Payment</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-8 sticky top-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Order Summary</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                {cart.map((el) => (
                  <div key={el._id} className="group bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-4 hover:bg-white/70 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex-shrink-0">
                        <img
                          src={el.image}
                          alt={el.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors">{el.name}</h3>
                        <p className="text-sm text-slate-500 mb-2 line-clamp-2">{el.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">Qty: {el.count}</span>
                          <span className="font-bold text-blue-600 text-lg">${el.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between text-2xl font-black text-slate-800">
                  <span>Total:</span>
                  <span className="text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    ${cart.reduce((acc, el) => acc + el.count * parseFloat(el.price), 0).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Animation */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          <p className="text-black font-medium text-slate-600"> You're almost there!</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;