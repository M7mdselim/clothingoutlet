
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getFeaturedProducts, getNewArrivals, getOnSaleProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const onSaleProducts = getOnSaleProducts();
  const { itemCount } = useCart();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={itemCount} />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="container px-4 sm:px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
          <ProductGrid products={featuredProducts} />
        </section>
        
        <section className="bg-gray-50 py-16">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our latest collection of premium quality garments designed for the modern individual.
              </p>
            </div>
            <ProductGrid products={newArrivals} />
          </div>
        </section>
        
        <section className="container px-4 sm:px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Limited-time deals on selected items. Shop now before they're gone.
            </p>
          </div>
          <ProductGrid products={onSaleProducts} />
        </section>
        
        <section className="bg-brand-light py-16">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4">Our Commitment to Sustainability</h2>
                <p className="text-gray-700 mb-6">
                  We're dedicated to creating high-quality garments that are kinder to our planet. 
                  Our eco-friendly materials and ethical manufacturing processes ensure you look 
                  good and feel good about your fashion choices.
                </p>
                <Button asChild className="bg-brand hover:bg-brand-dark">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
              
              <div className="flex-1 w-full max-w-md">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Sustainable Fashion" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
