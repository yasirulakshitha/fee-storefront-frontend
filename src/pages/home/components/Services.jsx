import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="py-16 px-10 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-150 rounded-full opacity-25 animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 relative inline-block">
            Services To Help You Shop
            
          </h1>
          <p className="text-lg text-gray-600 mt-4 opacity-80">Discover our comprehensive shopping solutions</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Service Card 1 */}
          <div className="group bg-gradient-to-br from-[#f4f8f9] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="overflow-hidden relative">
              <img
                src="/assets/services/faq.jpg"
                alt="FAQ"
                className="h-52 w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 relative z-10">
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                <h2 className="text-xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors duration-300">
                  <Link to="FAQ" className="hover:underline decoration-wavy decoration-blue-400">
                    Frequently Asked Questions
                  </Link>
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Updates on safe shopping in our store
              </p>
              <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500"></div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="group bg-gradient-to-br from-[#f4f8f9] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 relative" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="overflow-hidden relative">
              <img
                src="/assets/services/online-pay.jpg"
                alt="Online Payment"
                className="h-52 w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 relative z-10">
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <h2 className="text-xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors duration-300">
                  <Link to="OPP" className="hover:underline decoration-wavy decoration-blue-400">
                    Online Payment Process
                  </Link>
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Secure and easy checkout options
              </p>
              <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500"></div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="group bg-gradient-to-br from-[#f4f8f9] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 relative" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="overflow-hidden relative">
              <img
                src="/assets/services/delivery.jpg"
                alt="Delivery"
                className="h-52 w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 relative z-10">
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <h2 className="text-xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors duration-300">
                  <Link to="Delivery" className="hover:underline decoration-wavy decoration-blue-400">
                    Home Delivery Options
                  </Link>
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Flexible and fast delivery at your doorstep
              </p>
              <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Additional visual enhancement */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-blue-600 opacity-60">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;