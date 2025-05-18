
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const { itemCount } = useCart();
  
  useEffect(() => {
    if (category) {
      const categoryProducts = getProductsByCategory(category);
      setProducts(categoryProducts);
    }
  }, [category]);
  
  const getCategoryTitle = () => {
    switch (category) {
      case 'men':
        return "Men's Collection";
      case 'women':
        return "Women's Collection";
      case 'accessories':
        return "Accessories";
      case 'sale':
        return "Sale Items";
      default:
        return "Products";
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={itemCount} />
      
      <main className="flex-grow">
        <div className="bg-gray-50 py-10">
          <div className="container px-4 sm:px-6">
            <h1 className="text-3xl font-bold text-center">
              {getCategoryTitle()}
            </h1>
          </div>
        </div>
        
        <div className="container px-4 sm:px-6 py-12">
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="text-center py-16">
              <h2 className="text-xl font-medium mb-4">
                No products found in this category.
              </h2>
              <p className="text-gray-600">
                Please check back later or browse other categories.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
