'use client';
import { Product, products } from '@/lib/products';
import Image from 'next/image';
import { StarRating } from "@/components/products/StarRating";
interface ProductCardProps {
    product: Product;
    className?: string;
}

export default function ProductCardHero({ product, className = '' }: ProductCardProps) {
    return (
        <div className={`w-44 bg-white rounded-3xl z-99 shadow-lg overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-3 cursor-pointer ${className}`}>
            {/* Image Container */}
            <div className="bg-gradient-to-br from-gray-200 to-gray-100 p-1 flex items-center justify-center h-">
                <Image
                    width={200}
                    height={200}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl" />
            </div>

            {/* Product Info */}
            <div className="p-2">
                <h3 className="text-xs font-semibold text-gray-900 mb-2">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <StarRating rating={product.rating} />
                    <span className="text-xs text-gray-600 font-medium">
                        ({product.reviews})
                    </span>
                </div>
            </div>
        </div>
    );
};

