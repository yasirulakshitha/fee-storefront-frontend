import { useEffect, useState } from "react";
import ProductCard from "../home/components/ProductCard";
import Tab from "../home/components/Tab";
import { getAllCategories } from "../../services/api/categories";

function Shop() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [sortOrder, setSortOrder] = useState("asc");

  const fetchProducts = async (categoryId = null) => {
    try {
      let url = "https://fee-storefront-backend-hylf.onrender.com/api/products";
      if (categoryId && categoryId !== "ALL") {
        url += `?categoryId=${categoryId}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      const sortedData = [...data].sort((a, b) => {
        return sortOrder === "asc"
          ? parseFloat(a.price) - parseFloat(b.price)
          : parseFloat(b.price) - parseFloat(a.price);
      });

      setProducts(sortedData);
    } catch (error) {
      console.log("Failed to fetch products:", error);
    }
  };

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
  };

  useEffect(() => {
    getAllCategories().then((data) =>
      setCategories([{ _id: "ALL", name: "ALL" }, ...data])
    );
  }, []);

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory, sortOrder]);

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-40 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-slate-800 via-blue-600  bg-clip-text text-black mb-2 tracking-tight">
              Shop
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-500  rounded-full transform scale-x-0 animate-pulse group-hover:scale-x-100 transition-transform duration-700"></div>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover amazing products curated just for you
          </p>
        </div>

        {/* Categories with Enhanced Design */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 px-4">
          {categories.map((el) => (
            <Tab
              key={el._id}
              category={el}
              selectedCategory={selectedCategory}
              onClick={handleCategoryChange}
            />
          ))}
        </div>

        {/* Sort Control with Glass Effect */}
        <div className="flex justify-center mb-12">
          <div className="backdrop-blur-md bg-white/20 rounded-2xl p-6 border border-white/30 shadow-lg">
            <label className="block text-sm font-semibold text-slate-700 mb-3 text-center">
              Sort by Price
            </label>
            <select
              className="bg-white/90 backdrop-blur-sm border-0 px-6 py-3 rounded-xl shadow-md text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 cursor-pointer hover:shadow-lg"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option value="asc"> Low to High</option>
              <option value="desc"> High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid with Stagger Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {products.map((el, index) => (
            <div 
              key={el._id} 
              className="transform hover:scale-105 transition-all duration-300 hover:z-10"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <ProductCard
                _id={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                description={el.description}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Footer */}
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-blue-500  rounded-full animate-bounce opacity-70"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
          <div className="inline-block bg-gradient-to-r from-blue-600  bg-clip-text text-transparent">
            <p className="text-black font-semibold"> Happy Shopping! </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Shop;