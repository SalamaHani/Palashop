'use client';

import { Star } from 'lucide-react';
import { Product } from '@/lib/products';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
    className?: string;
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
    // Generate product placeholder images based on category
    const getProductImagePlaceholder = (category: string, name: string) => {
        // Create a unique gradient based on product name
        const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const hue = hash % 360;

        const categoryColors: Record<string, { from: string; to: string; emoji: string }> = {
            food: { from: '#f59e0b', to: '#d97706', emoji: '🫒' },
            fashion: { from: '#ec4899', to: '#be185d', emoji: '🧣' },
            beauty: { from: '#a855f7', to: '#7e22ce', emoji: '💄' },
            home: { from: '#06b6d4', to: '#0891b2', emoji: '🏺' },
            art: { from: '#8b5cf6', to: '#6d28d9', emoji: '🎨' },
            jewelry: { from: '#f472b6', to: '#db2777', emoji: '💍' }
        };

        const categoryData = categoryColors[category.toLowerCase()] || {
            from: `hsl(${hue}, 70%, 60%)`,
            to: `hsl(${hue + 30}, 70%, 50%)`,
            emoji: '🛍️'
        };

        return categoryData;
    };

    const imageData = getProductImagePlaceholder(product.category, product.name);

    return (
        <div
            className={`group cursor-pointer bg-white dark:bg-gray-900 rounded-xl lg:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-3 ${className}`}
        >
            {/* Product Image Container with 3D Effect */}
            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
                {/* Gradient background matching reference */}
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        background: `linear-gradient(135deg, ${imageData.from}, ${imageData.to})`
                    }}
                />

                {/* Product representation with emoji/icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Background blur circles for depth */}
                        <div className="absolute w-32 h-32 lg:w-40 lg:h-40 bg-white/30 dark:bg-black/20 rounded-full blur-2xl" />

                        {/* Main product icon */}
                        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                            <span className="text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl filter brightness-110">
                                {imageData.emoji}
                            </span>
                        </div>

                        {/* Decorative miniature people/elements (like in reference) */}
                        <div className="absolute bottom-4 right-6 text-xs lg:text-sm opacity-70">
                            <span>👤</span>
                        </div>
                    </div>
                </div>

                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10" />
            </div>

            {/* Product Info */}
            <div className="p-3 lg:p-4 bg-white dark:bg-gray-900">
                {/* Product Name */}
                <h3 className="font-medium text-xs lg:text-sm text-gray-900 dark:text-white mb-1.5 lg:mb-2 line-clamp-2 group-hover:text-[#5B4CE6] dark:group-hover:text-[#9D3FF2] transition-colors leading-tight">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-1">
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-2.5 h-2.5 lg:w-3 lg:h-3 ${i < Math.floor(product.rating)
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-[10px] lg:text-xs text-gray-500 dark:text-gray-400 ml-0.5">
                        ({product.reviews})
                    </span>
                </div>

                {/* Price */}
                <p className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">
                    ${product.price}
                </p>
            </div>
        </div>
    );
}
