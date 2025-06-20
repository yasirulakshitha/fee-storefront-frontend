function FrequentlyAskQuestionsPage() {
  return (
    <div className="py-16 px-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-36 h-36 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-28 h-28 bg-gray-100 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-black opacity-10 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-6xl font-bold text-gray-800 mb-6 relative inline-block">
            <span className=" text-black">
              Frequently Asked Questions
            </span>
            
          </h1>
          <p className="text-xl text-gray-600 mt-6 opacity-80">Find answers to common questions about our products and services</p>
        </div>

        <div className="space-y-8">
          {/* FAQ Item 1 */}
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">
                  1.1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    Do you sell refurbished or used items?
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Yes, we offer both new and certified refurbished items. Refurbished items undergo a thorough inspection and come with a warranty.
                  </p>
                </div>
              </div>
              <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-black to-gray-600 transition-all duration-500"></div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse" style={{ animationDelay: '0.2s' }}>
                  1.2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    Do your products come with a warranty?
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Yes, all of our tech products come with a manufacturer's warranty, typically ranging from 1 to 3 years depending on the item. Refurbished items also come with a store-backed warranty.
                  </p>
                </div>
              </div>
              <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-black to-gray-600 transition-all duration-500"></div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse" style={{ animationDelay: '0.4s' }}>
                  1.3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    How do I know which product is right for me?
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    We offer detailed product descriptions, customer reviews, and comparison tools to help you choose the right tech product based on your needs and budget. Our customer service team is also available for personalized advice.
                  </p>
                </div>
              </div>
              <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-black to-gray-600 transition-all duration-500"></div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative overflow-hidden" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse" style={{ animationDelay: '0.6s' }}>
                  1.4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    Do your laptops/phones come with pre-installed software?
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Yes, we offer both new and certified refurbished items. Refurbished items undergo a thorough inspection and come with a warranty.
                  </p>
                </div>
              </div>
              <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-black to-gray-600 transition-all duration-500"></div>
            </div>
          </div>

          {/* FAQ Item 5 */}
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative overflow-hidden" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse" style={{ animationDelay: '0.8s' }}>
                  1.5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    What is the difference between different tech brands or models?
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Each brand and model has unique features. You can compare products on our website, where we provide detailed specifications such as processor speed, storage capacity, battery life, and camera quality for phones, laptops, and other devices.
                  </p>
                </div>
              </div>
              <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-black to-gray-600 transition-all duration-500"></div>
            </div>
          </div>

          {/* FAQ Item 6 */}
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative overflow-hidden" style={{ animationDelay: '0.5s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse" style={{ animationDelay: '1s' }}>
                  1.6
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    Can I upgrade components like RAM or storage in the devices?
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Some devices, like certain laptops or desktops, allow upgrades to RAM or storage. This information is usually listed in the product details, but feel free to contact us for specific inquiries on upgrade options.
                  </p>
                </div>
              </div>
              <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-black to-gray-600 transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Additional visual enhancement */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-600 opacity-60">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="mt-4 text-gray-600 text-lg">Have more questions? Contact our support team!</p>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAskQuestionsPage;