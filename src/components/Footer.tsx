
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter.",
    });
  };

  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <h2 className="text-xl font-bold">ELEGANCE</h2>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Premium clothing crafted with care and attention to detail for the modern individual.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-brand">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/category/men" className="text-sm text-gray-600 hover:text-brand">Men</Link>
              </li>
              <li>
                <Link to="/category/women" className="text-sm text-gray-600 hover:text-brand">Women</Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-sm text-gray-600 hover:text-brand">Accessories</Link>
              </li>
              <li>
                <Link to="/category/sale" className="text-sm text-gray-600 hover:text-brand">Sale</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-brand">Contact Us</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm text-gray-600 hover:text-brand">FAQs</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-gray-600 hover:text-brand">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-sm text-gray-600 hover:text-brand">Size Guide</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-600">
              Subscribe to get special offers and updates.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white" 
                  required 
                />
                <Button type="submit" className="bg-brand hover:bg-brand-dark">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ELEGANCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
