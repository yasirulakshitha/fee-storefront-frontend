import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Failed to load product", err));
  }, [id]);

  if (!product) return <div className="p-8">Loading...</div>;

  return (
    <section className="py-8 px-16">
      <h1 className="text-4xl font-semibold">{product.name}</h1>
      <div className="grid grid-cols-2 gap-8 mt-4">
        <img src={product.image} alt={product.name} className="w-full rounded-lg" />
        <div>
          <p className="text-lg mb-4">{product.description}</p>
          <span className="text-2xl font-bold">${product.price}</span>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
