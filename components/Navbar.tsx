'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Heart, User } from 'lucide-react';
import Image from 'next/image';
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Top Banner */}
            <div className="bg-black text-white text-center py-2 text-sm">
                Download Shop app. Available on iOS & Android
            </div>

            {/* Main Navbar */}
            <nav className="bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-lg bg-white/90 dark:bg-[#0a0a0a]/90">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <Image src="/images/logo.jpeg" alt="Logo" width={150} height={1} />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                href="/"
                                className="text-[#215732] dark:text-white hover:text-[#215732] dark:hover:text-[#34d399] transition-colors font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                href="/shop"
                                className="text-[#215732] dark:text-white hover:text-[#215732] dark:hover:text-[#34d399] transition-colors font-medium"
                            >
                                Shop
                            </Link>
                            <Link
                                href="/categories"
                                className="text-[#215732] dark:text-white hover:text-[#215732] dark:hover:text-[#34d399] transition-colors font-medium"
                            >
                                Categories
                            </Link>
                            <Link
                                href="/about"
                                className="text-[#215732] dark:text-white hover:text-[#215732] dark:hover:text-[#34d399] transition-colors font-medium"
                            >
                                About
                            </Link>
                        </div>

                        {/* Right Side Icons */}
                        <div className="flex items-center space-x-4">
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                                <Heart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative">
                                <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                <span className="absolute -top-1 -right-1 bg-[#215732] dark:bg-[#34d399] text-white dark:text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                                    0
                                </span>
                            </button>
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                                <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                            >
                                {isMenuOpen ? (
                                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                ) : (
                                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]">
                        <div className="px-4 py-4 space-y-3">
                            <Link
                                href="/"
                                className="block py-2 text-[#215732] dark:text-white hover:text-[#215732] dark:hover:text-[#34d399] transition-colors font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/shop"
                                className="block py-2 text-[#215732] dark:text-white hover:text-[#215732] dark:hover:text-[#34d399] transition-colors font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Shop
                            </Link>
                            <Link
                                href="/categories"
                                className="block py-2 text-[#215732] dark:text-white hover:text-[#215732] dark:hover:text-[#34d399] transition-colors font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Categories
                            </Link>
                            <Link
                                href="/about"
                                className="block py-2 text-[#215732] dark:text-white hover:text-[#215732] dark:hover:text-[#34d399] transition-colors font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
