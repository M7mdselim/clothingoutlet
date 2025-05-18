
export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type ProductCategory = 'men' | 'women' | 'accessories';

export type ProductColor = {
  name: string;
  hexCode: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: ProductCategory;
  subcategory: string;
  colors: ProductColor[];
  sizes: ProductSize[];
  featured?: boolean;
  isNew?: boolean;
  onSale?: boolean;
};

export type CartItem = {
  product: Product;
  quantity: number;
  selectedColor: ProductColor;
  selectedSize: ProductSize;
};
