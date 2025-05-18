
import { Link } from "react-router-dom";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    id,
    name,
    price,
    discountPrice,
    images,
    isNew,
    onSale
  } = product;

  return (
    <div className="group product-card-hover">
      <Link to={`/product/${id}`} className="block relative overflow-hidden">
        <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Product badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <span className="bg-brand-dark text-white text-xs px-2 py-1 rounded">
              New
            </span>
          )}
          
          {onSale && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
          )}
        </div>
      </Link>
      
      <div className="mt-3 px-1">
        <Link to={`/product/${id}`}>
          <h3 className="text-sm font-medium">{name}</h3>
        </Link>
        
        <div className="mt-1 flex items-center">
          {discountPrice ? (
            <>
              <span className="text-sm font-medium text-red-600">
                ${discountPrice.toFixed(2)}
              </span>
              <span className="ml-2 text-xs text-gray-500 line-through">
                ${price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-sm font-medium">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
        
        <div className="mt-2 flex items-center space-x-1">
          {product.colors.slice(0, 3).map((color) => (
            <div
              key={color.name}
              className="w-3 h-3 rounded-full border border-gray-300"
              style={{ backgroundColor: color.hexCode }}
              title={color.name}
            />
          ))}
          
          {product.colors.length > 3 && (
            <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
