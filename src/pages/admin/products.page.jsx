import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api/products";
import { getAllCategories } from "../../services/api/categories";
import { toast } from "sonner";

function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    categoryId: "",
  });

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (e) {
      console.error("Failed to fetch products:", e);
    }
  };

  useEffect(() => {
    fetchProducts();
    getAllCategories().then(setCategories);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await window.Clerk?.session?.getToken();

    const res = await fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (res.status === 201) {
      setFormData({
        name: "",
        description: "",
        price: "",
        image: "",
        categoryId: "",
      });

      toast.success("Product added successfully!");
      await fetchProducts();
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
              Manage Products
            </span>
            
          </h1>
          <p className="text-xl text-blue-700 opacity-80">Add and view all store products below</p>
        </div>

        {/* Product Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 border border-blue-100 transition-all duration-300"
        >
          <input
            className="border-2 border-blue-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="border-2 border-blue-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            className="border-2 border-blue-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            className="border-2 border-blue-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <select
            className="border-2 border-blue-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Add Product
          </button>
        </form>

        {/* Product Table */}
        <div className="overflow-x-auto rounded-2xl shadow-xl border border-blue-200">
          <table className="min-w-full text-left text-sm bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 to-blue-100 text-black uppercase tracking-wider">
                <th className="p-4 border-b border-blue-200">Image</th>
                <th className="p-4 border-b border-blue-200">Name</th>
                <th className="p-4 border-b border-blue-200">Price</th>
                <th className="p-4 border-b border-blue-200">Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <tr
                  key={prod._id}
                  className="border-t border-blue-100 hover:bg-blue-50 transition duration-300"
                >
                  <td className="p-4">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-16 h-16 rounded-xl object-cover border-2 border-blue-200 shadow-md"
                    />
                  </td>
                  <td className="p-4 font-semibold text-blue-800">{prod.name}</td>
                  <td className="p-4 text-blue-600 font-bold">
                    ${prod.price}
                  </td>
                  <td className="p-4 text-blue-700">{prod.categoryId?.name || "N/A"}</td>
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
          <p className="mt-4 text-black">Manage your products with ease</p>
        </div>
      </div>
    </div>
  );
}

export default AdminProductsPage;