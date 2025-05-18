
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ProductColor, ProductSize } from "@/types/product";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, itemCount } = useCart();
  
  const product = getProductById(id || "");
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar cartItemCount={itemCount} />
        <main className="flex-grow container px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Button onClick={() => navigate("/")}>Return to Homepage</Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  const relatedProducts = getProductById(id || "")?.category 
    ? getProductById(id || "")?.category === "men" 
      ? getProductById(id || "")?.category === "women"
        ? getProductById(id || "")?.category === "accessories"
          ? [] 
          : [] 
        : [] 
      : [] 
    : [];
  
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) return;
    
    addToCart(product, quantity, selectedColor, selectedSize);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={itemCount} />
      
      <main className="flex-grow">
        <div className="container px-4 sm:px-6 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="lg:w-2/3">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Thumbnails */}
                <div className="md:order-1 order-2 flex md:flex-col flex-row gap-3 overflow-x-auto md:overflow-visible">
                  {product.images.map((image, index) => (
                    <button 
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`border rounded w-16 h-20 flex-shrink-0 overflow-hidden ${
                        selectedImage === index 
                          ? 'border-brand' 
                          : 'border-gray-200'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={product.name} 
                        className="w-full h-full object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
                
                {/* Main Image */}
                <div className="md:order-2 order-1 flex-1">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="lg:w-1/3">
              <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
              
              <div className="mt-4">
                {product.discountPrice ? (
                  <div className="flex items-center">
                    <span className="text-xl font-medium text-red-600">
                      ${product.discountPrice.toFixed(2)}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="text-xl font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
              
              <div className="mt-6">
                <p className="text-gray-700">
                  {product.description}
                </p>
              </div>
              
              {/* Color Selection */}
              <div className="mt-6">
                <h3 className="text-sm font-medium">Color</h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`
                        w-8 h-8 rounded-full border flex items-center justify-center 
                        ${selectedColor?.name === color.name 
                          ? 'ring-2 ring-offset-2 ring-brand' 
                          : 'border-gray-300'}
                      `}
                      style={{ backgroundColor: color.hexCode }}
                      title={color.name}
                    >
                      {selectedColor?.name === color.name && (
                        <span className={`text-xs ${
                          color.name === 'White' ? 'text-black' : 'text-white'
                        }`}>✓</span>
                      )}
                    </button>
                  ))}
                </div>
                {selectedColor && (
                  <p className="mt-1 text-sm text-gray-500">
                    Selected: {selectedColor.name}
                  </p>
                )}
              </div>
              
              {/* Size Selection */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Size</h3>
                  <a href="#" className="text-sm font-medium text-brand hover:underline">
                    Size Guide
                  </a>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        py-2 border rounded-md text-sm font-medium
                        ${selectedSize === size
                          ? 'bg-brand text-white border-brand'
                          : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'}
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mt-6">
                <h3 className="text-sm font-medium">Quantity</h3>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="border border-gray-300 rounded-l-md p-2"
                  >
                    -
                  </button>
                  <div className="border-t border-b border-gray-300 py-2 px-4 w-12 text-center">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="border border-gray-300 rounded-r-md p-2"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="mt-8">
                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-brand hover:bg-brand-dark"
                  disabled={!selectedSize || !selectedColor}
                >
                  Add to Cart
                </Button>
              </div>
              
              {(!selectedSize || !selectedColor) && (
                <p className="mt-2 text-sm text-red-500">
                  Please select both size and color
                </p>
              )}
              
              {/* Additional Details */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium">Details</h3>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>Made with premium materials</li>
                  <li>Ethically manufactured</li>
                  <li>Free shipping on orders over $50</li>
                  <li>30-day return policy</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-6">You may also like</h2>
              <ProductGrid products={relatedProducts} />
            </section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
