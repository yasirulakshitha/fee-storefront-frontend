import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState, useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { toast } from "sonner";

function ProductCard(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { updateCart } = useContext(CartContext);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    updateCart({
      _id: props._id,
      name: props.name,
      price: props.price,
      image: props.image,
      description: props.description,
      count: 1,
    });

    toast.success("Item added to cart");
  };

  return (
    <div 
      className="relative rounded-3xl shadow-lg bg-white overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-blue-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1] pointer-events-none`} />
      
      {/* Heart Icon with enhanced styling */}
      <div className="absolute top-4 right-4 z-20">
        <div className="backdrop-blur-sm bg-white/80 rounded-full p-2 shadow-lg">
          <Heart
            onClick={handleClick}
            className={`w-5 h-5 cursor-pointer transition-all duration-300 ${
              isLiked 
                ? "text-red-500 fill-red-500 scale-110" 
                : "text-gray-400 hover:text-red-500 hover:scale-110"
            }`}
          />
        </div>
      </div>

      {/* Premium badge */}
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Premium
          </div>
        </div>
      </div>

      {/* Clickable Image + Product Info */}
      <Link to={`/product/${props._id}`}>
        <div className="relative overflow-hidden">
          <div className="h-72 bg-gradient-to-br from-blue-50 to-blue-100 relative">
            <img
              src={props.image}
              alt={props.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Image overlay gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="p-6 relative z-10">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                {props.name}
              </h3>
              <div className="ml-3 flex-shrink-0">
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  ${props.price}
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed mb-4">
              {props.description}
            </p>

            {/* Rating stars placeholder */}
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">(4.5)</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Enhanced Add to Cart Button */}
      <div className="px-6 pb-6">
        <button
          onClick={handleAddToCart}
          type="button"
          className={`w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold text-sm transition-all duration-300 transform hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
            isHovered ? 'shadow-xl' : 'shadow-md'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          Add To Cart
        </button>
      </div>

      {/* Subtle shimmer effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000" />
      </div>
    </div>
  );
}

export default ProductCard;