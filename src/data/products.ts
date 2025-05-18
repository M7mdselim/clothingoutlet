
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "p1",
    name: "Classic Cotton T-Shirt",
    description: "A comfortable everyday essential. This premium cotton t-shirt features a classic fit and timeless design that pairs well with anything in your wardrobe.",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "men",
    subcategory: "t-shirts",
    colors: [
      { name: "White", hexCode: "#FFFFFF" },
      { name: "Black", hexCode: "#000000" },
      { name: "Navy", hexCode: "#0A192F" }
    ],
    sizes: ["S", "M", "L", "XL"],
    featured: true,
    isNew: true
  },
  {
    id: "p2",
    name: "Slim Fit Jeans",
    description: "Contemporary slim fit jeans crafted from premium stretch denim for all-day comfort and a modern silhouette.",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "men",
    subcategory: "jeans",
    colors: [
      { name: "Blue", hexCode: "#0F52BA" },
      { name: "Black", hexCode: "#000000" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true
  },
  {
    id: "p3",
    name: "Oversized Wool Coat",
    description: "A luxurious wool blend coat with an oversized silhouette. Features notched lapels and a two-button closure for a sophisticated finish.",
    price: 229.99,
    discountPrice: 179.99,
    images: [
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "women",
    subcategory: "outerwear",
    colors: [
      { name: "Camel", hexCode: "#C19A6B" },
      { name: "Black", hexCode: "#000000" }
    ],
    sizes: ["XS", "S", "M", "L"],
    onSale: true
  },
  {
    id: "p4",
    name: "Silk Blouse",
    description: "Elegant silk blouse with a relaxed fit and hidden button closure. Perfect for both office wear and evenings out.",
    price: 119.99,
    images: [
      "https://images.unsplash.com/photo-1605763240000-7e93b172d754?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1602488283247-0d460f010d39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "women",
    subcategory: "blouses",
    colors: [
      { name: "White", hexCode: "#FFFFFF" },
      { name: "Blush", hexCode: "#FFE4E1" },
      { name: "Navy", hexCode: "#0A192F" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    isNew: true
  },
  {
    id: "p5",
    name: "Leather Crossbody Bag",
    description: "Handcrafted from premium Italian leather, this crossbody bag features multiple compartments and an adjustable strap for versatile carrying options.",
    price: 179.99,
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4b504f1a83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "accessories",
    subcategory: "bags",
    colors: [
      { name: "Tan", hexCode: "#D2B48C" },
      { name: "Black", hexCode: "#000000" },
      { name: "Brown", hexCode: "#5E4B40" }
    ],
    sizes: ["M"],
    featured: true
  },
  {
    id: "p6",
    name: "Pleated Midi Skirt",
    description: "A sophisticated pleated midi skirt that moves fluidly with every step. Features an elasticated waistband for all-day comfort.",
    price: 89.99,
    discountPrice: 69.99,
    images: [
      "https://images.unsplash.com/photo-1577900232427-18219b8349cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "women",
    subcategory: "skirts",
    colors: [
      { name: "Black", hexCode: "#000000" },
      { name: "Beige", hexCode: "#F5F5DC" }
    ],
    sizes: ["XS", "S", "M", "L"],
    onSale: true
  },
  {
    id: "p7",
    name: "Knit Sweater",
    description: "A cozy knit sweater made from soft merino wool blend with a relaxed fit and ribbed trims.",
    price: 99.99,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "men",
    subcategory: "knitwear",
    colors: [
      { name: "Gray", hexCode: "#808080" },
      { name: "Beige", hexCode: "#F5F5DC" },
      { name: "Navy", hexCode: "#0A192F" }
    ],
    sizes: ["S", "M", "L", "XL"],
    isNew: true
  },
  {
    id: "p8",
    name: "Leather Sneakers",
    description: "Minimalist leather sneakers crafted from premium materials with a comfortable rubber sole and clean design.",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ],
    category: "accessories",
    subcategory: "shoes",
    colors: [
      { name: "White", hexCode: "#FFFFFF" },
      { name: "Black", hexCode: "#000000" }
    ],
    sizes: ["S", "M", "L", "XL"],
    featured: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getOnSaleProducts = (): Product[] => {
  return products.filter(product => product.onSale);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
