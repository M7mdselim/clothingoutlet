
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="container px-4 py-16 md:py-24 flex flex-col items-center lg:flex-row gap-10 lg:gap-20">
        <div className="flex-1 max-w-2xl text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">Elevate Your Style</span>
            <span className="block text-brand-dark">with ELEGANCE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0">
            Discover our latest collection of timeless designs crafted with premium materials and exceptional attention to detail.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="bg-brand hover:bg-brand-dark btn-hover">
              <Link to="/category/women">Women's Collection</Link>
            </Button>
            
            <Button asChild size="lg" variant="outline">
              <Link to="/category/men">Men's Collection</Link>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
          <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="ELEGANCE Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-2 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#fff" preserveAspectRatio="none">
          <path d="M0,96L120,90.7C240,85,480,75,720,74.7C960,75,1200,85,1320,90.7L1440,96L1440,100L1320,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
