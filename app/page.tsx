'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Search, ArrowRight } from 'lucide-react';
import ProductCardHero from '@/components/Home/Cardhero';
import AllCollections from '@/components/view/AllCollections';
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = Math.ceil(products.length / 8);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [slidesCount]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
      <Navbar />

      <main className="relative">
        {/* Hero Section with Products Scattered Around Search */}
        <section className="relative overflow-hidden  px-4 min-h-[95vh] flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            {/* Products Carousel - Scattered Around Search */}
            <div className="relative min-h-[460px] lg:min-h-[555px] flex flex-col">
              <div className="absolute top-[38%]  -translate-y-1/2 left-0 right-0 z-20 px-4">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center text-5xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold mb-6 md:mb-8">
                  <span className="text-6xl font-bold bg-[#215732] bg-clip-text text-transparent">
                    Shop
                  </span>
                </motion.h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-lg mx-auto">
                  <div className="relative group">
                    <input type="text" placeholder="What are you shopping for today?" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-6 py-4 pr-14 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-[#215732] dark:focus:border-[#34d399] focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 shadow-lg group-hover:shadow-xl text-base" />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-[#215732]  rounded-full text-white hover:scale-105 transition-transform duration-300 shadow-lg">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </div>
              <AnimatePresence mode="wait" initial={false}>

                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  className="absolute inset-0"
                >
                  {/* Desktop: Products Scattered Around Search Bar */}
                  <div className="lg:block hidden md:hidden">
                    {/* TOP ROW - Products Above Search */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="absolute top-[3%] left-[3%] w-35 xl:w-30">
                      {products[currentSlide * 10] && <ProductCardHero product={products[currentSlide * 1]} />}
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="absolute top-[1%] left-[20%] w-35 xl:w-30">
                      {products[currentSlide * 10 + 1] && <ProductCardHero product={products[currentSlide * 1 + 1]} />}
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="absolute p-3 bottom-[20%] right-[-3%]  -translate-x-1/2 w-30 xl:w-40 z-10">
                      {products[currentSlide * 10 + 2] && <ProductCardHero product={products[currentSlide * 1 + 2]} />}
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="absolute bottom-[-3%] right-[20%] w-35 xl:w-30">
                      {products[currentSlide * 10 + 3] && <ProductCardHero product={products[currentSlide * 1 + 3]} />}
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="absolute top-[3%] right-[20%] w-35 xl:w-30">
                      {products[currentSlide * 10 + 4] && <ProductCardHero product={products[currentSlide * 1 + 4]} />}
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="absolute bottom-0 left-[10%] w-35 xl:w-30">
                      {products[currentSlide * 10 + 5] && <ProductCardHero product={products[currentSlide * 1 + 5]} />}
                    </motion.div>
                  </div>

                  {/* CENTER - Title and Search Bar (Z-indexed above products) */}

                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {Array.from({ length: slidesCount }).map((_, index) => (
                  <button key={index} onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gray-800 dark:bg-white w-8' : 'bg-gray-300 dark:bg-gray-600 w-2'}`} aria-label={`Go to slide ${index + 1}`} />
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-center mt-8">
              <a href="/shop" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#5B4CE6] to-[#9D3FF2] text-white rounded-full font-semibold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Explore All Products
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 md:py-20 px-4 bg-white dark:bg-[#0f0f0f]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-900 dark:text-white">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {['Fashion', 'Beauty', 'Food', 'Home'].map((category, index) => (
                <motion.a key={category} href={`/shop?category=${category.toLowerCase()}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} whileHover={{ scale: 1.05, y: -5 }} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 md:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl mb-3 md:mb-4">
                      {category === 'Fashion' && '👗'}
                      {category === 'Beauty' && '💄'}
                      {category === 'Food' && '🫒'}
                      {category === 'Home' && '🏺'}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{category}</h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5B4CE6]/0 to-[#9D3FF2]/0 group-hover:from-[#5B4CE6]/5 group-hover:to-[#9D3FF2]/5 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-900 dark:text-white">Why Choose PALshop?</h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                { emoji: '✨', title: 'Authentic Products', desc: '100% genuine Palestinian handcrafted items and traditional goods' },
                { emoji: '🚚', title: 'Fast Shipping', desc: 'Quick and secure delivery to your doorstep' },
                { emoji: '🤝', title: 'Support Artisans', desc: 'Every purchase supports Palestinian craftspeople and families' }
              ].map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15, duration: 0.5 }} className="text-center p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800">
                  <div className="text-4xl md:text-5xl mb-3 md:mb-4">{item.emoji}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div>
        <AllCollections />
      </div>
      <Footer />
    </div>
  );
}
