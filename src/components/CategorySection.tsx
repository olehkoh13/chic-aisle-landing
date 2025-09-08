const CategorySection = () => {
  const categories = [
    {
      title: "Essentials",
      description: "Timeless pieces that form the foundation of your wardrobe",
      items: ["White Shirts", "Black Trousers", "Blazers", "Knitwear"]
    },
    {
      title: "Seasonal",
      description: "Contemporary styles for the modern woman",
      items: ["Dresses", "Outerwear", "Accessories", "Footwear"]
    },
    {
      title: "Premium",
      description: "Luxury pieces for special occasions",
      items: ["Evening Wear", "Cashmere", "Silk Scarves", "Designer Bags"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every aspect of your life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="text-center p-8 bg-background rounded-lg shadow-product hover:shadow-hover transition-all duration-300">
              <h3 className="heading-3 mb-4">{category.title}</h3>
              <p className="text-muted-foreground mb-6">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="nav-link text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;