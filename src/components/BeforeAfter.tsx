"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BeforeAfter = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: MouseEvent | TouchEvent) => {
        if (!isResizing || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
        const relativeX = x - rect.left;
        const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
        
        setSliderPos(percentage);
    };

    const handleMouseDown = () => setIsResizing(true);
    const handleMouseUp = () => setIsResizing(false);

    useEffect(() => {
        window.addEventListener('mousemove', handleMove as any);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleMove as any);
        window.addEventListener('touchend', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMove as any);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMove as any);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isResizing]);

    return (
        <section className="py-24 md:py-40 bg-zinc-50 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] mb-4 text-gray-400 font-light underline underline-offset-8 decoration-black/5">Direct Transformation</h2>
                        <h3 className="text-3xl md:text-6xl font-serif leading-tight mb-8">The Alchemy of <br /> Luxury</h3>
                        <p className="text-lg text-gray-600 leading-relaxed font-light mb-12 max-w-xl">
                            Witness the transition from architectural shell to curated sanctuary. Our process involves stripping back the ordinary to reveal the extraordinary potential of every space.
                        </p>
                        
                        <div className="space-y-8">
                            <div className="flex items-start space-x-6">
                                <span className="text-2xl font-serif text-black/20">01</span>
                                <div>
                                    <h4 className="text-lg font-medium mb-2">Structural Reimagining</h4>
                                    <p className="text-sm text-gray-500 font-light">We identify the inherent flow and light of the skeleton to maximize spatial impact.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <span className="text-2xl font-serif text-black/20">02</span>
                                <div>
                                    <h4 className="text-lg font-medium mb-2">Material Curation</h4>
                                    <p className="text-sm text-gray-500 font-light">Sourcing rare marbles, custom metalworks, and hand-finished timbers from global artisans.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div 
                            ref={containerRef}
                            className="relative aspect-[4/5] overflow-hidden luxury-shadow bg-zinc-200 cursor-ew-resize select-none"
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
                            />
                            
                            {/* Before Image (Clipped) */}
                            <div 
                                className="absolute inset-0 overflow-hidden" 
                                style={{ width: `${sliderPos}%` }}
                            >
                                <Image 
                                    src="/luxury_office.png" 
                                    alt="Before" 
                                    fill 
                                    className="object-cover grayscale brightness-75"
                                    priority
                                />
                            </div>

                            {/* Slider Handle */}
                            <div 
                                className="absolute top-0 bottom-0 w-px bg-white z-10"
                                style={{ left: `${sliderPos}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xl">
                                    <div className="flex space-x-1">
                                        <div className="w-0.5 h-3 bg-black/20" />
                                        <div className="w-0.5 h-3 bg-black/20" />
                                    </div>
                                </div>
                            </div>

                            {/* Labels */}
                            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
                                <span className="text-[10px] uppercase tracking-widest text-white/60 font-light">Raw Space</span>
                            </div>
                            <div className="absolute bottom-6 right-6 z-20 pointer-events-none text-right">
                                <span className="text-[10px] uppercase tracking-widest text-white/60 font-light">The Result</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
