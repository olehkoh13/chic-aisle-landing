import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-hero-gradient">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="hero-text">
                Discover Your
                <br />
                <span className="italic">Perfect Style</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Curated collection of premium women's clothing. 
                From timeless classics to contemporary pieces, 
                find your signature look.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-hero">
                Shop New Arrivals
              </button>
              <button className="btn-outline">
                Explore Collection
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px]">
            <img
              src={heroImage}
              alt="Fashion model wearing elegant clothing"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;