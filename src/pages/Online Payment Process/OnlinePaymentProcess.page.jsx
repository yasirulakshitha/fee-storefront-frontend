function OnelinePaymentProcessPage() {
  return (
    <div className="py-16 px-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-36 h-36 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-28 h-28 bg-yellow-100 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gray-800 opacity-10 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-6xl font-bold text-gray-800 mb-6 relative inline-block">
            <span className=" text-black">
              Online Payment Process
            </span>
            
          </h1>
          <p className="text-xl text-gray-600 mt-6 opacity-80">Everything you need to know about how to pay safely and smoothly</p>
        </div>

        <div className="space-y-8">
          {[
            {
              id: "1.1",
              title: "What payment methods do you accept?",
              desc: "We accept major credit and debit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and other popular digital wallets. You can select your preferred payment method during checkout.",
            },
            {
              id: "1.2",
              title: "Is my payment information secure?",
              desc: "Yes, we use advanced encryption technology (SSL) to protect your payment information. We do not store your credit card details, and all transactions are securely processed through our payment gateway partners.",
            },
            {
              id: "1.3",
              title: "Can I pay in installments?",
              desc: "Yes, we offer installment plans through third-party financing partners. Eligible products can be paid over several months. You can select this option during checkout if your purchase qualifies for financing.",
            },
            {
              id: "1.4",
              title: "How can I apply a discount or promo code?",
              desc: "You can enter your discount or promo code in the designated box during checkout. The discount will be automatically applied to your total before payment.",
            },
            {
              id: "1.5",
              title: "What should I do if my payment is declined?",
              desc: "If your payment is declined, first ensure that your card details are entered correctly. If the issue persists, try a different payment method or contact your bank. You can also reach out to our customer service for further assistance.",
            },
            {
              id: "1.6",
              title: "Do you charge additional fees for international payments?",
              desc: "We do not charge additional fees for international payments, but your bank may apply currency conversion or international transaction fees. Check with your bank for details.",
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
          <p className="mt-4 text-gray-600 text-lg">Have payment questions? We're here to help!</p>
        </div>
      </div>
    </div>
  );
}

export default OnelinePaymentProcessPage;
