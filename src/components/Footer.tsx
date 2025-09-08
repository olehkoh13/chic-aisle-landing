const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">EVELYN</h3>
            <p className="text-muted-foreground">
              Premium women's clothing for the modern, confident woman. 
              Discover your perfect style with our curated collections.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="heading-3 mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="nav-link text-sm">New Arrivals</a></li>
              <li><a href="#" className="nav-link text-sm">Clothing</a></li>
              <li><a href="#" className="nav-link text-sm">Accessories</a></li>
              <li><a href="#" className="nav-link text-sm">Sale</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="heading-3 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="nav-link text-sm">Size Guide</a></li>
              <li><a href="#" className="nav-link text-sm">Shipping</a></li>
              <li><a href="#" className="nav-link text-sm">Returns</a></li>
              <li><a href="#" className="nav-link text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="heading-3 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="nav-link text-sm">About Us</a></li>
              <li><a href="#" className="nav-link text-sm">Careers</a></li>
              <li><a href="#" className="nav-link text-sm">Privacy</a></li>
              <li><a href="#" className="nav-link text-sm">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Evelyn. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Pinterest
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;