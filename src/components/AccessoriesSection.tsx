import accessory1 from "@/assets/accessory-1.jpg";
import accessory2 from "@/assets/accessory-2.jpg";
import accessory3 from "@/assets/accessory-3.jpg";

interface Accessory {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const accessories: Accessory[] = [
  {
    id: 1,
    name: "Luxury Black Handbag",
    price: 295,
    image: accessory1,
    category: "Handbags"
  },
  {
    id: 2,
    name: "Gold Jewelry Set",
    price: 89,
    image: accessory2,
    category: "Jewelry"
  },
  {
    id: 3,
    name: "Silk Pattern Scarf",
    price: 65,
    image: accessory3,
    category: "Scarves"
  }
];

const AccessoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Latest Arrivals - Accessories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete your look with our exquisite collection of accessories. 
            From statement jewelry to elegant handbags and scarves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="product-card group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-1">{accessory.category}</p>
                <h3 className="heading-3 mb-2">{accessory.name}</h3>
                <p className="font-semibold">${accessory.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-outline">
            View All Accessories
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;