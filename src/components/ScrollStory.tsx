"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ScrollStory = () => {
    const ref = useRef(null);
    const visionRef = useRef(null);
    const lifestyleRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const { scrollYProgress: visionProgress } = useScroll({
        target: visionRef,
        offset: ["start end", "end start"],
    });

    const { scrollYProgress: lifestyleProgress } = useScroll({
        target: lifestyleRef,
        offset: ["start end", "end start"],
    });

    const textOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
    const textScale = useTransform(scrollYProgress, [0.3, 0.5], [0.95, 1]);

    const visionScale = useTransform(visionProgress, [0, 0.5], [1.1, 1]);
    const visionOpacity = useTransform(visionProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const lifestyleY = useTransform(lifestyleProgress, [0, 1], [100, -100]);

    return (
        <div className="bg-white">
            {/* 2. THE PROBLEM */}
            <section ref={ref} className="h-[100vh] flex items-center justify-center sticky top-0">
                <motion.div
                    style={{ opacity: textOpacity, scale: textScale }}
                    className="max-w-4xl text-center px-6"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-8">
                        Your space should reflect who you are. <br className="hidden md:block" />
                        Not just function — but identity.
                    </h2>
                    <div className="w-20 h-px bg-black mx-auto" />
                </motion.div>
            </section>

            {/* 3. THE VISION */}
            <section id="vision" ref={visionRef} className="relative h-[150vh] flex flex-col items-center justify-center overflow-hidden">
                <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                    <motion.div
                        style={{ scale: visionScale, opacity: visionOpacity }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src="/vision_luxury_details.png"
                            alt="Luxury Details"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-10 text-center text-white px-6 max-w-5xl"
                    >
                        <h2 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
                            We design interiors that command attention, elevate comfort, and define status.
                        </h2>
                        <p className="text-sm md:text-base uppercase tracking-[0.4em] font-light text-zinc-300">
                            The Antwort to Luxury Living
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3.5 LIFESTYLE INTERJECTION */}
            <section ref={lifestyleRef} className="py-40 bg-white px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        style={{ y: lifestyleY }}
                        className="relative aspect-[3/4] overflow-hidden luxury-shadow"
                    >
                        <Image
                            src="/luxury_showroom.png"
                            alt="Lifestyle Showroom"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <div className="space-y-12">
                        <h3 className="text-4xl md:text-6xl font-serif leading-tight">
                            Curated for the Exceptional.
                        </h3>
                        <p className="text-lg text-gray-500 leading-relaxed font-light">
                            Our process is not about filling rooms. It is about spatial storytelling. We source materials from around the globe to ensure your home is a unique masterpiece of comfort and design.
                        </p>
                        <div className="pt-8">
                            <div className="h-px w-full bg-black/10 mb-8" />
                            <div className="flex justify-between items-center text-xs uppercase tracking-widest text-gray-400">
                                <span>Bespoke Materials</span>
                                <span>Artisan Craft</span>
                                <span>Global Vision</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default ScrollStory;
