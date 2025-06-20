import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, updateCart, removeFromCart } = useContext(CartContext);

  const totalAmount = cart.reduce((total, item) => total + (item.price * item.count), 0);

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-40 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 bg-clip-text text-black mb-2 tracking-tight">
              Your Shopping Cart
            </h1>
            
          </div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Review and manage items before checkout
          </p>
          {cart.length > 0 && (
            <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl px-6 py-3 border border-blue-200">
              <span className="text-blue-800 font-semibold">{cart.length} item{cart.length > 1 ? 's' : ''} • Total: ${totalAmount.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Cart Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cart.length > 0 ? (
            cart.map((el, index) => (
              <div
                key={el._id}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 overflow-hidden group"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'slideInRight 0.6s ease-out forwards'
                }}
              >
                <div className="grid grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="col-span-1 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
                    <img
                      src={el.image}
                      alt={el.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Info */}
                  <div className="col-span-2 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                        {el.name}
                      </h2>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">{el.description}</p>
                      <div className="mt-3">
                        <span className="text-xl font-black text-blue-600">
                          ${el.price}
                        </span>
                        <span className="text-slate-500 ml-1 text-sm">each</span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-700">Quantity:</span>
                        <div className="flex items-center bg-blue-50 rounded-full border border-blue-200">
                          <button
                            onClick={() => {
                              if (el.count === 1) {
                                removeFromCart(el._id);
                              } else {
                                updateCart({ ...el, count: el.count - 1 });
                              }
                            }}
                            className="w-8 h-8 rounded-full hover:bg-blue-100 transition-colors flex items-center justify-center text-blue-600 font-bold text-lg"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 font-semibold text-blue-800">{el.count}</span>
                          <button
                            onClick={() => updateCart({ ...el, count: el.count + 1 })}
                            className="w-8 h-8 rounded-full hover:bg-blue-100 transition-colors flex items-center justify-center text-blue-600 font-bold text-lg"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-slate-800">
                          ${(el.price * el.count).toFixed(2)}
                        </div>
                        <div className="text-xs text-slate-500">subtotal</div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(el._id)}
                      className="bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border border-red-200 hover:border-red-500 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 w-fit"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="text-6xl mb-6">🛒</div>
              <h3 className="text-2xl font-bold text-slate-700 mb-4">Your cart is empty</h3>
              <p className="text-lg text-slate-500">Start shopping to add items to your cart</p>
            </div>
          )}
        </div>

        {/* Checkout Button */}
        {cart.length > 0 && (
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Checkout?</h3>
                <div className="text-3xl font-black">
                  Total: ${totalAmount.toFixed(2)}
                </div>
                <Link
                  to="/checkout"
                  className="block bg-white text-blue-600 px-8 py-3 rounded-2xl text-lg font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Footer */}
        <div className="text-center mt-16 space-y-6">
          <div className="flex justify-center items-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce opacity-70"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            <p className="text-black font-semibold">Ready when you are!</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

export default CartPage;