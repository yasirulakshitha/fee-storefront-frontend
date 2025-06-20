function HomeDeliveroptionsPage() {
  return (
    <div className="py-16 px-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-36 h-36 bg-yellow-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-28 h-28 bg-blue-100 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gray-800 opacity-10 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-6xl font-bold text-gray-800 mb-6 relative inline-block">
            <span className=" text-black">
              Home Delivery Options
            </span>
            
          </h1>
          <p className="text-xl text-gray-600 mt-6 opacity-80">All you need to know about how we deliver your products</p>
        </div>

        <div className="space-y-8">
          {/* FAQ-style delivery questions */}
          {[
            {
              id: "1.1",
              title: "How much does delivery cost?",
              desc: "Delivery costs vary based on the shipping method and location. Standard delivery may be free for orders above a certain amount, while express and same-day delivery come with additional charges. Exact costs will be shown at checkout.",
            },
            {
              id: "1.2",
              title: "Can I track my delivery?",
              desc: "Yes, once your order is shipped, you’ll receive an email with a tracking number. You can use this to track your delivery in real-time through the courier’s website or via your account on our site.",
            },
            {
              id: "1.3",
              title: "Do you offer international delivery?",
              desc: "Yes, we ship internationally to many countries. Delivery fees and estimated times will vary depending on the destination. Be aware that customs duties or taxes may apply.",
            },
            {
              id: "1.4",
              title: "Can I change my delivery address after placing an order?",
              desc: "You can update your delivery address within a short time after placing your order, as long as the order has not yet been processed. Contact our customer support for assistance.",
            },
            {
              id: "1.5",
              title: "What should I do if my delivery is late?",
              desc: "If your delivery exceeds the estimated time, please contact our customer support team. We’ll work with the courier to investigate and resolve the issue as quickly as possible.",
            },
            {
              id: "1.6",
              title: "What happens if I’m not home when my package arrives?",
              desc: "If you're unavailable at the time of delivery, the courier may leave a note with instructions for rescheduling or picking up your package from a nearby location. Some couriers may also offer to leave the package in a safe place.",
            },
          ].map((item, index) => (
            <div
              key={item.id}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">
                    {item.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-black to-gray-600 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Call-to-Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-600 opacity-60">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="mt-4 text-gray-600 text-lg">Still have delivery questions? Our team is here to help!</p>
        </div>
      </div>
    </div>
  );
}

export default HomeDeliveroptionsPage;
