import { Link } from "react-router-dom";
import { Boxes, ListOrdered, ShoppingCart } from "lucide-react";

function AdminHomePage() {
  return (
    <div className="min-h-screen py-16 px-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-blue-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-600 opacity-10 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Back link */}
        <div className="flex justify-end mb-6">
          <Link
            to="/"
            className="text-m font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-6xl font-bold text-gray-800 mb-4 relative inline-block">
            <span className="text-black">
              Admin Dashboard
            </span>
          
          </h1>
          <p className="text-xl text-blue-700 opacity-80">Select a section below to manage the store.</p>
        </div>

        {/* Dashboard cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Products",
              desc: "View, add, or edit store products.",
              icon: <Boxes className="text-blue-600" />,
            },
            {
              title: "Categories",
              desc: "Manage product categories.",
              icon: <ListOrdered className="text-blue-500" />,
            },
            {
              title: "Orders",
              desc: "Track customer orders and status.",
              icon: <ShoppingCart className="text-blue-700" />,
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-blue-100 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
                    {item.title}
                  </h2>
                  <div className="transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                </div>
                <p className="text-blue-700 text-lg group-hover:text-blue-800 transition-colors duration-300">
                  {item.desc}
                </p>
                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer visual */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-blue-600 opacity-60">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="mt-4 text-black text-lg">Need admin help? Reach out to the support team.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;