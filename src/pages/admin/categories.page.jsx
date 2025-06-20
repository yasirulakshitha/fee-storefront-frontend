import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/api/categories";

function AdminCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const fetchCategories = () => {
    getAllCategories().then(setCategories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await window.Clerk?.session?.getToken();

    const res = await fetch("https://fee-storefront-backend-hylf.onrender.com/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: categoryName }),
    });

    if (res.ok) {
      setCategoryName("");
      fetchCategories();
    }
  };

  return (
    <div className="min-h-screen py-16 px-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-24 right-24 w-36 h-36 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-28 left-16 w-28 h-28 bg-blue-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-600 opacity-10 rounded-full animate-ping" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-6xl font-bold text-gray-800 mb-4 relative inline-block">
            <span className="text-black">
              Manage Categories
            </span>
            
          </h1>
          <p className="text-xl text-blue-700 opacity-80">Add and view all product categories</p>
        </div>

        {/* Add Category Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl flex flex-col sm:flex-row gap-6 mb-14 border border-blue-100 transition-all duration-300"
        >
          <input
            type="text"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
            className="border-2 border-blue-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 flex-1"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Add Category
          </button>
        </form>

        {/* Category Table */}
        <div className="overflow-x-auto rounded-2xl shadow-xl border border-blue-200">
          <table className="min-w-full text-left text-sm bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 to-blue-100 text-black uppercase tracking-wider">
                <th className="p-4 border-b border-blue-200">Category Name</th>
                <th className="p-4 border-b border-blue-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr
                  key={cat._id}
                  className="border-t border-blue-100 hover:bg-blue-50 transition duration-300"
                >
                  <td className="p-4 font-semibold text-blue-800">{cat.name}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Animation */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-blue-600 opacity-60">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="mt-4 text-black">Organize your store categories effortlessly</p>
        </div>
      </div>
    </div>
  );
}

export default AdminCategoriesPage;