import shoes1 from "@/assets/shoes-1.jpg";
import shoes2 from "@/assets/shoes-2.jpg";
import shoes3 from "@/assets/shoes-3.jpg";

interface Shoe {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const shoes: Shoe[] = [
  {
    id: 1,
    name: "Classic Black Heels",
    price: 149,
    image: shoes1,
    category: "Heels"
  },
  {
    id: 2,
    name: "White Leather Sneakers",
    price: 95,
    image: shoes2,
    category: "Sneakers"
  },
  {
    id: 3,
    name: "Brown Ankle Boots",
    price: 185,
    image: shoes3,
    category: "Boots"
  }
];

const ShoesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Latest Arrivals - Shoes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step into style with our newest collection of premium footwear. 
            From elegant heels to comfortable everyday shoes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shoes.map((shoe) => (
            <div key={shoe.id} className="product-card group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-1">{shoe.category}</p>
                <h3 className="heading-3 mb-2">{shoe.name}</h3>
                <p className="font-semibold">${shoe.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-outline">
            View All Shoes
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShoesSection;