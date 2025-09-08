import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Stay in Style</h2>
          <p className="mb-8 text-primary-foreground/80">
            Be the first to know about new arrivals, exclusive offers, and styling tips. 
            Join our community of fashion-forward women.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-primary-foreground text-foreground"
            />
            <Button variant="secondary" className="sm:w-auto">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/60 mt-4">
            Unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;