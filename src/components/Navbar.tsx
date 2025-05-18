
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Navbar = ({ cartItemCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleSearchClick = () => {
    toast({
      title: "Search functionality",
      description: "Search feature coming soon!",
    });
  };
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Men", path: "/category/men" },
    { name: "Women", path: "/category/women" },
    { name: "Accessories", path: "/category/accessories" },
    { name: "Sale", path: "/category/sale" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="container px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="mr-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        <div className="flex-1 lg:flex-none">
          <Link to="/" className="text-xl md:text-2xl font-bold">
            ELEGANCE
          </Link>
        </div>
        
        <nav className={`
          ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white border-b shadow-lg animate-fade-in' : 'hidden'} 
          lg:flex lg:relative lg:bg-transparent lg:shadow-none lg:border-none
          px-4 py-4 lg:py-0
        `}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 font-medium text-sm uppercase tracking-wider">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className="block py-2 lg:py-0 hover:text-brand"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={handleSearchClick}>
            <Search size={20} />
          </Button>
          
          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User size={20} />
            </Button>
          </Link>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-dark text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
