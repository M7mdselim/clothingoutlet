
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const AccountPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { toast } = useToast();
  const { itemCount } = useCart();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login successful!",
      description: "Welcome back to ELEGANCE.",
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={itemCount} />

      <main className="flex-grow">
        <div className="container px-4 sm:px-6 py-12">
          {isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl font-bold mb-8 text-center">My Account</h1>
              
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">Account Information</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Name:</p>
                    <p className="font-medium">John Doe</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email:</p>
                    <p className="font-medium">{loginData.email}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">Order History</h2>
                <p className="text-gray-600">You haven't placed any orders yet.</p>
              </div>

              <Button onClick={handleLogout} variant="outline" className="w-full">
                Logout
              </Button>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl font-bold mb-8 text-center">Login to Your Account</h1>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-1">
                        Password
                      </label>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                          Remember me
                        </label>
                      </div>
                      
                      <a href="#" className="text-sm font-medium text-brand hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    
                    <Button type="submit" className="w-full bg-brand hover:bg-brand-dark">
                      Sign in
                    </Button>
                  </div>
                </form>
                
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">Or</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-center text-sm text-gray-600">
                      Don't have an account?{' '}
                      <a href="#" className="font-medium text-brand hover:underline">
                        Sign up
                      </a>
                    </p>
                  </div>
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

export default AccountPage;
