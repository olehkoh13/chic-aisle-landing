import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Cashmere Blend Sweater",
    price: 189,
    image: product1,
    category: "Knitwear"
  },
  {
    id: 2,
    name: "Classic White Shirt",
    price: 95,
    image: product2,
    category: "Shirts"
  },
  {
    id: 3,
    name: "Tailored Blazer",
    price: 245,
    image: product3,
    category: "Blazers"
  },
  {
    id: 4,
    name: "Trench Coat",
    price: 295,
    image: product4,
    category: "Outerwear"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">New Arrivals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the latest additions to our curated collection. 
            Each piece is selected for its quality, craftsmanship, and timeless appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                <h3 className="heading-3 mb-2">{product.name}</h3>
                <p className="font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-outline">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;