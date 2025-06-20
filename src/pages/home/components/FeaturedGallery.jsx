import { useEffect, useRef, useState } from "react";
import { getAllProducts } from "../../../services/api/products";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

function FeaturedGallery() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const data = await getAllProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError("Failed to load products");
        console.error("Error fetching products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const startAutoScroll = () => {
      if (isPaused || products.length === 0) return;

      intervalRef.current = setInterval(() => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          const scrollAmount = 300;

          if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
          }
        }
      }, 4000);
    };

    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [isPaused, products.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (isLoading || error || products.length === 0) {
    return (
      <section className="py-16 px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-12">
            Featured Products
          </h2>
          {isLoading ? (
            <div className="flex gap-8">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="min-w-[280px] max-w-[280px] bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl animate-pulse">
                  <div className="w-full h-56 bg-gradient-to-br from-slate-200 to-slate-300"></div>
                  <div className="p-6">
                    <div className="h-6 bg-slate-200 rounded-lg mb-3"></div>
                    <div className="h-4 bg-slate-200 rounded mb-4"></div>
                    <div className="h-5 bg-slate-200 rounded w-24"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-slate-400 rounded opacity-50"></div>
              </div>
              <p className="text-slate-600 mb-6 text-lg">{error || "No products available at the moment."}</p>
              {error && (
                <button
                  onClick={() => window.location.reload()}
                  className="px-8 py-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl font-medium hover:from-slate-700 hover:to-slate-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  Try Again
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <div className="flex gap-3">
            <button 
              onClick={scrollLeft} 
              className="p-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:bg-white hover:shadow-xl transition-all transform hover:scale-110 group"
            >
              <svg className="w-5 h-5 text-slate-600 group-hover:text-slate-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight} 
              className="p-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:bg-white hover:shadow-xl transition-all transform hover:scale-110 group"
            >
              <svg className="w-5 h-5 text-slate-600 group-hover:text-slate-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className="group relative min-w-[280px] max-w-[280px] rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-t-2xl h-56 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/api/placeholder/240/192';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      ${product.price}
                    </p>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-sm text-slate-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-500 font-medium">(4.5)</span>
                </div>
              </div>
              
              <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/0 group-hover:ring-blue-500/20 transition-all duration-300"></div>
            </Link>
          ))}
        </div>
        
        <style jsx>{`
          .scroll-smooth::-webkit-scrollbar {
            display: none;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </section>
  );
}

export default FeaturedGallery;