import { useState } from 'react';

function Footer() {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="relative mt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-[#f4f9ff] to-blue-100 opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-300 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-ping opacity-30"></div>
      
      <footer className="relative bg-[#f4f9ff]/80 backdrop-blur-sm text-gray-800 px-16 py-12 border-t border-blue-100/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand Section - Enhanced */}
          <div className="group">
            <div className="relative">
              <h1 className="text-3xl font-bold text-blue-700 group-hover:scale-105 transition-transform duration-300 cursor-default">
                Mebius
              </h1>
              {/* Glowing underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-500 shadow-sm shadow-blue-200"></div>
              
              {/* Floating particles around logo */}
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
              <div className="absolute -top-1 -right-1 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-100"></div>
            </div>
            
            <p className="mt-4 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus hic quod voluptas ipsam.
            </p>
            
            {/* Enhanced Social Icons */}
            <div className="flex gap-4 mt-4">
              <div className="group/icon relative">
                <img 
                  src="/assets/footer/icons8-instagram-96.png" 
                  alt="Instagram" 
                  className="w-8 h-8 group-hover/icon:scale-110 group-hover/icon:rotate-12 transition-transform duration-300 cursor-pointer" 
                />
                <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover/icon:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 rounded-full border border-blue-300 opacity-0 group-hover/icon:opacity-50 group-hover/icon:animate-ping transition-opacity duration-300"></div>
              </div>
              
              <div className="group/icon relative">
                <img 
                  src="/assets/footer/icons8-linkedin-96.png" 
                  alt="LinkedIn" 
                  className="w-8 h-8 group-hover/icon:scale-110 group-hover/icon:rotate-12 transition-transform duration-300 cursor-pointer" 
                />
                <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover/icon:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 rounded-full border border-blue-300 opacity-0 group-hover/icon:opacity-50 group-hover/icon:animate-ping transition-opacity duration-300"></div>
              </div>
              
              <div className="group/icon relative">
                <img 
                  src="/assets/footer/icons8-tiktok-96.png" 
                  alt="TikTok" 
                  className="w-8 h-8 group-hover/icon:scale-110 group-hover/icon:rotate-12 transition-transform duration-300 cursor-pointer" 
                />
                <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover/icon:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 rounded-full border border-blue-300 opacity-0 group-hover/icon:opacity-50 group-hover/icon:animate-ping transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* First Column Group - Enhanced */}
          <div className="grid grid-cols-2 gap-10">
            <div 
              className="group relative"
              onMouseEnter={() => setHoveredSection('makemoney')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-blue-600 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
              
              <h2 className="relative text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                Make Money
                {/* Animated underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </h2>
              
              <ul className="relative space-y-1 text-sm">
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Sell your devices
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Sell your services
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Sell your apps
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Become an affiliate
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Advertise your product
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Become a vendor
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
              </ul>
            </div>
            
            <div 
              className="group relative"
              onMouseEnter={() => setHoveredSection('categories')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-blue-600 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
              
              <h2 className="relative text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                Categories
                {/* Animated underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </h2>
              
              <ul className="relative space-y-1 text-sm">
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Apple
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Camera & Photos
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Cell Phones
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Computers & Accessories
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Headphones
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Smart Watches
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Second Column Group - Enhanced */}
          <div className="grid grid-cols-2 gap-10">
            <div 
              className="group relative"
              onMouseEnter={() => setHoveredSection('support')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-blue-600 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
              
              <h2 className="relative text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                Support
                {/* Animated underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </h2>
              
              <ul className="relative space-y-1 text-sm">
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Your Account
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Your Orders
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Terms & Conditions
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Help Center
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
              </ul>
            </div>
            
            <div 
              className="group relative"
              onMouseEnter={() => setHoveredSection('knowus')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-blue-600 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
              
              <h2 className="relative text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                Know Us
                {/* Animated underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </h2>
              
              <ul className="relative space-y-1 text-sm">
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Careers
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    About
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Investors
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
                <li className="group/item hover:text-blue-600 hover:translate-x-2 transition-all duration-200 cursor-pointer py-1">
                  <span className="relative">
                    Contact Us
                    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-600 group-hover/item:w-full transition-all duration-200"></div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Enhanced bottom border */}
        <div className="mt-8 pt-4 border-t border-blue-200/50">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;