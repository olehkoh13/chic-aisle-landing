import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";

interface Dress {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const dresses: Dress[] = [
  {
    id: 1,
    name: "Elegant Black Midi Dress",
    price: 129,
    image: dress1,
    category: "Midi Dresses"
  },
  {
    id: 2,
    name: "Flowing White Summer Dress",
    price: 89,
    image: dress2,
    category: "Summer Dresses"
  },
  {
    id: 3,
    name: "Burgundy Cocktail Dress",
    price: 195,
    image: dress3,
    category: "Evening Wear"
  }
];

const DressesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Latest Arrivals - Dresses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our newest dress collection designed for every occasion. 
            From casual day wear to elegant evening pieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dresses.map((dress) => (
            <div key={dress.id} className="product-card group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={dress.image}
                  alt={dress.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-1">{dress.category}</p>
                <h3 className="heading-3 mb-2">{dress.name}</h3>
                <p className="font-semibold">${dress.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-outline">
            View All Dresses
          </button>
        </div>
      </div>
    </section>
  );
};

export default DressesSection;