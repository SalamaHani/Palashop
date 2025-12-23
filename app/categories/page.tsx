'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories } from '@/lib/products';
import Link from 'next/link';

const categoryDetails = [
    {
        name: 'Fashion',
        slug: 'fashion',
        description: 'Traditional Palestinian clothing and accessories',
        emoji: '👗',
        items: ['Keffiyeh', 'Embroidered Scarves', 'Traditional Dresses', 'Jewelry'],
        color: 'from-pink-500 to-purple-500'
    },
    {
        name: 'Beauty',
        slug: 'beauty',
        description: 'Natural skincare and beauty products',
        emoji: '💄',
        items: ['Olive Oil Soap', 'Dead Sea Products', 'Natural Creams', 'Essential Oils'],
        color: 'from-rose-500 to-red-500'
    },
    {
        name: 'Food',
        slug: 'food',
        description: 'Authentic Palestinian foods and spices',
        emoji: '🫒',
        items: ['Olive Oil', 'Za\'atar', 'Date Syrup', 'Tahini'],
        color: 'from-amber-500 to-orange-500'
    },
    {
        name: 'Home',
        slug: 'home',
        description: 'Handcrafted decorative items for your home',
        emoji: '🏺',
        items: ['Ceramics', 'Embroidered Cushions', 'Wooden Crafts', 'Wall Art'],
        color: 'from-emerald-500 to-teal-500'
    },
];

export default function CategoriesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a]">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-[#215732] to-[#34d399] bg-clip-text text-transparent">
                            Categories
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Explore our curated collection of authentic Palestinian products
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {categoryDetails.map((category, index) => (
                        <Link
                            key={category.slug}
                            href={`/shop?category=${category.slug}`}
                            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="p-8 md:p-12">
                                {/* Icon */}
                                <div className="text-7xl mb-6">{category.emoji}</div>

                                {/* Title */}
                                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-[#215732] dark:group-hover:text-[#34d399] transition-colors">
                                    {category.name}
                                </h2>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                                    {category.description}
                                </p>

                                {/* Items List */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {category.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-2 text-[#215732] dark:text-[#34d399] font-semibold group-hover:gap-4 transition-all">
                                    Browse {category.name}
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Gradient Overlay */}
                            <div
                                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-full`}
                            />
                        </Link>
                    ))}
                </div>

                {/* All Products CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#215732] to-[#34d399] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        View All Products
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
