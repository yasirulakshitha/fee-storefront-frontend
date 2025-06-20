import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

function Navigation() {
  const { cart } = useContext(CartContext);
  const { user, isSignedIn, isLoaded } = useUser();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-6 sm:px-12 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo + Links */}
        <div className="flex items-center gap-x-10">
          <Link
            className="text-3xl font-bold text-blue-600 tracking-wide hover:text-blue-700 transition duration-200"
            to="/"
          >
            Mebius
          </Link>
          <div className="hidden sm:flex items-center gap-x-6 text-gray-700 font-medium text-m">
            <Link
              to="/"
              className="hover:text-blue-600 hover:underline underline-offset-4 transition"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="hover:text-blue-600 hover:underline underline-offset-4 transition"
            >
              Shop
            </Link>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-x-4 text-gray-700 text-m">
          <Link
            to="/cart"
            className="relative flex items-center gap-x-2 font-medium hover:text-blue-600 transition group"
          >
            <span className="text-base font-bold group-hover:scale-110 transition">
              {cart.reduce((sum, el) => sum + (el.count || 0), 0)}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart group-hover:scale-110 transition"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
          </Link>

          <SignedIn>
            <div className="flex items-center gap-x-3 sm:gap-x-4">
              <span className="font-medium hidden sm:inline">Hi,</span>
              {user?.publicMetadata?.role === "admin" && (
                <Link
                  to="/admin"
                  className="hover:underline text-blue-600 font-semibold text-m"
                >
                  Admin Panel
                </Link>
              )}
              <Link
                to="/profile/orders"
                className="hover:text-blue-600 transition text-m"
              >
                Your Orders
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>

          <SignedOut>
            <div className="flex items-center gap-x-3 sm:gap-x-4 text-m">
              <Link
                to="/sign-in"
                className="hover:text-blue-600 hover:underline underline-offset-4 transition"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="hover:text-blue-600 hover:underline underline-offset-4 transition"
              >
                Sign Up
              </Link>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
