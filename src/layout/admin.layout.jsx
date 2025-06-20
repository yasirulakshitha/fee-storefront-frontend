import { Outlet, Link, Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { LayoutDashboard, PackageOpen, Layers, ClipboardList } from "lucide-react";

function AdminLayout() {
  const { user, isLoaded, isSignedIn } = useUser();
  const location = useLocation();

  if (!isLoaded) return <div>Loading...</div>;
  if (!isSignedIn || user.publicMetadata?.role !== "admin") {
    return <Navigate to="/" />;
  }

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={18} /> },
    { name: "Products", path: "/admin/products", icon: <PackageOpen size={18} /> },
    { name: "Categories", path: "/admin/categories", icon: <Layers size={18} /> },
    { name: "Orders", path: "/admin/orders", icon: <ClipboardList size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-blue-200 shadow-2xl p-6 sticky top-0 h-screen">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-10">Admin Panel</h2>
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200"
                    : "text-black hover:bg-blue-50 hover:text-blue-800 hover:shadow-md"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gradient-to-br from-blue-50/50 to-white">
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8 backdrop-blur-sm">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;