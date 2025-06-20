import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="py-16 px-10 bg-gradient-to-br from-[#f4f8f9] via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 bg-yellow-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gray-100 rounded-full opacity-25 animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 rounded-2xl relative z-10">
        {/* Enhanced Text Content */}
        <div className="flex flex-col gap-y-6 transform hover:scale-105 transition-transform duration-300">
          <div className="relative">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold w-fit shadow-lg transform hover:scale-110 transition-transform duration-300 animate-pulse">
              WEEKLY DISCOUNT
            </span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-gray-800 relative">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Premium Product
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
              Online Shop
            </span>
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded animate-pulse"></div>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed transform hover:text-gray-700 transition-colors duration-300">
            Discover amazing gadgets and devices at the best prices. Fast delivery and reliable service — only at 
            <span className="font-semibold text-blue-600"> Mebius</span>.
          </p>
          
          <div className="relative group">
            <Link
              to="/shop"
              className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-black to-gray-800 text-white font-bold rounded-xl hover:from-gray-800 hover:to-black transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <span className="flex items-center gap-2">
                Shop Now
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
          </div>
        </div>

        {/* Enhanced Image Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-yellow-200 rounded-2xl transform rotate-6 scale-105 opacity-20 group-hover:rotate-3 transition-transform duration-500"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 border-4 border-white">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img
              src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
              alt="Hero"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-pulse z-20"></div>
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              Premium Quality
            </div>
          </div>
          
          {/* Floating elements around image */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      {/* Additional visual enhancement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 opacity-40">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;