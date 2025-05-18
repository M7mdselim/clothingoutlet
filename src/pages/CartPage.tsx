
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, clearCart, itemCount, subtotal } = useCart();
  const { toast } = useToast();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      toast({
        title: "Order placed!",
        description: "Your order has been successfully placed.",
      });
      
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={itemCount} />
      
      <main className="flex-grow">
        <div className="container px-4 sm:px-6 py-12">
          <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Add some products to your cart to continue shopping.</p>
              <Button asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 text-gray-700">
                      <tr>
                        <th className="py-3 px-4 text-left">Product</th>
                        <th className="py-3 px-4 text-center">Quantity</th>
                        <th className="py-3 px-4 text-right">Price</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {items.map((item) => (
                        <tr key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-4">
                              <div className="w-16 h-20 bg-gray-100 rounded overflow-hidden">
                                <img
                                  src={item.product.images[0]}
                                  alt={item.product.name}
                                  className="w-full h-full object-cover object-center"
                                />
                              </div>
                              <div>
                                <h3 className="text-sm font-medium">
                                  <Link to={`/product/${item.product.id}`} className="hover:text-brand">
                                    {item.product.name}
                                  </Link>
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  {item.selectedColor.name} / {item.selectedSize}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex justify-center items-center">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="border border-gray-300 rounded-l-md p-1 text-sm"
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <div className="border-t border-b border-gray-300 py-1 px-3 text-center min-w-[40px]">
                                {item.quantity}
                              </div>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="border border-gray-300 rounded-r-md p-1 text-sm"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-right whitespace-nowrap">
                            ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-gray-500 hover:text-red-500"
                            >
                              <X size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="border rounded-lg p-6 bg-gray-50">
                  <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping:</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax:</span>
                      <span>${(subtotal * 0.07).toFixed(2)}</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200 font-medium flex justify-between">
                      <span>Total:</span>
                      <span>${(subtotal + subtotal * 0.07).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-brand hover:bg-brand-dark mb-4"
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                  >
                    {isCheckingOut ? "Processing..." : "Checkout"}
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
