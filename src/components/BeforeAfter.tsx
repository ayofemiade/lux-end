"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/lib/constants';

const BeforeAfter = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: MouseEvent | TouchEvent) => {
        if (!isResizing || !containerRef.current) return;

        if ('touches' in e) {
            e.preventDefault();
        }

        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        const relativeX = x - rect.left;
        const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));

        setSliderPos(percentage);
    };

    const handleMouseDown = () => setIsResizing(true);
    const handleMouseUp = () => setIsResizing(false);

    useEffect(() => {
        if (isResizing) {
            window.addEventListener('mousemove', handleMove as any);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleMove as any, { passive: false });
            window.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMove as any);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMove as any);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isResizing]);

    return (
        <section className="py-24 md:py-40 bg-zinc-50 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[10px] md:text-sm uppercase tracking-[0.5em] mb-6 text-gray-400 font-light underline underline-offset-8 decoration-black/5">Direct Transformation</h2>
                            <h3 className="text-3xl md:text-7xl font-serif leading-[1.1] mb-8">The Alchemy of <br className="hidden md:block" /> Luxury</h3>
                            <p className="text-base md:text-lg text-gray-500 leading-relaxed font-light mb-12 max-w-xl">
                                Witness the transition from architectural shell to curated sanctuary. Our process involves stripping back the ordinary to reveal the extraordinary potential of every space.
                            </p>

                            <div className="space-y-10 md:space-y-12">
                                <div className="flex items-start space-x-8 group">
                                    <span className="text-2xl md:text-3xl font-serif text-black/10 group-hover:text-black/40 transition-colors duration-500">01</span>
                                    <div>
                                        <h4 className="text-lg font-medium mb-3">Structural Reimagining</h4>
                                        <p className="text-sm text-gray-400 font-light leading-relaxed">We identify the inherent flow and light of the skeleton to maximize spatial impact.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-8 group">
                                    <span className="text-2xl md:text-3xl font-serif text-black/10 group-hover:text-black/40 transition-colors duration-500">02</span>
                                    <div>
                                        <h4 className="text-lg font-medium mb-3">Material Curation</h4>
                                        <p className="text-sm text-gray-400 font-light leading-relaxed">Sourcing rare marbles, custom metalworks, and hand-finished timbers from global artisans.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div
                            ref={containerRef}
                            className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden luxury-shadow bg-zinc-200 cursor-ew-resize select-none touch-none"
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleMouseDown}
                        >
                            {/* After Image */}
                            <Image
                                src="/hero_luxury_interior.png"
                                alt="After"
                                fill
                                className="object-cover"
                                priority
                                placeholder="blur"
                                blurDataURL={BLUR_DATA_URL}
                            />

                            {/* Before Image (Clipped) */}
                            <div
                                className="absolute inset-0 overflow-hidden"
                                style={{ width: `${sliderPos}%` }}
                            >
                                <div className="relative h-full w-[calc(100vw-48px)] lg:w-[calc((1280px-96px)/2)] min-w-[300px] h-full"> {/* Match parent size */}
                                    <Image
                                        src="/luxury_office.png"
                                        alt="Before"
                                        fill
                                        className="object-cover grayscale brightness-75"
                                        priority
                                        placeholder="blur"
                                        blurDataURL={BLUR_DATA_URL}
                                    />
                                </div>
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute top-0 bottom-0 w-[2px] bg-white/50 backdrop-blur-md z-10"
                                style={{ left: `calc(${sliderPos}% - 1px)` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl transition-transform active:scale-90">
                                    <div className="flex space-x-1">
                                        <div className="w-0.5 h-4 bg-white/80 rounded-full" />
                                        <div className="w-0.5 h-4 bg-white/80 rounded-full" />
                                    </div>
                                </div>
                            </div>

                            {/* Labels */}
                            <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white font-medium drop-shadow-lg">Raw Context</span>
                            </div>
                            <div className="absolute bottom-8 right-8 z-20 pointer-events-none text-right">
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white font-medium drop-shadow-lg">Curated Result</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
