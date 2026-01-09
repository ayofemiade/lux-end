"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/constants";

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
            <section ref={ref} className="h-[100vh] flex items-center justify-center sticky top-0 bg-transparent z-10 pointer-events-none">
                <motion.div
                    style={{ opacity: textOpacity, scale: textScale }}
                    className="max-w-4xl text-center px-6"
                >
                    <h2 className="text-4xl md:text-7xl font-serif text-black leading-[1.1] mb-12">
                        Architecture provides the walls. <br className="hidden md:block" />
                        We provide the <span className="italic">soul</span>.
                    </h2>
                    <div className="w-24 h-px bg-black mx-auto" />
                </motion.div>
            </section>

            {/* 3. THE VISION */}
            <section id="vision" ref={visionRef} className="relative h-[200vh] flex flex-col items-center justify-center overflow-hidden">
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
                            placeholder="blur"
                            blurDataURL={BLUR_DATA_URL}
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 text-center text-white px-6 max-w-6xl"
                    >
                        <h2 className="text-4xl md:text-[clamp(2.5rem,6vw,5rem)] font-serif mb-12 leading-[1.1]">
                            Curating environments that command presence and offer absolute sanctuary.
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                            <div className="text-center group">
                                <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-2 group-hover:text-white transition-colors">Precision</span>
                                <p className="text-xs text-zinc-300 font-light">Millimetre perfect execution</p>
                            </div>
                            <div className="hidden md:block w-px h-8 bg-white/20" />
                            <div className="text-center group">
                                <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-2 group-hover:text-white transition-colors">Rarity</span>
                                <p className="text-xs text-zinc-300 font-light">Global material sourcing</p>
                            </div>
                            <div className="hidden md:block w-px h-8 bg-white/20" />
                            <div className="text-center group">
                                <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-2 group-hover:text-white transition-colors">Legality</span>
                                <p className="text-xs text-zinc-300 font-light">Heirloom quality design</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. LIFESTYLE INTERJECTION */}
            <section ref={lifestyleRef} className="py-40 md:py-60 bg-white px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        style={{ y: lifestyleY }}
                        className="relative aspect-[3/4] overflow-hidden luxury-shadow group"
                    >
                        <Image
                            src="/luxury_showroom.png"
                            alt="Lifestyle Showroom"
                            fill
                            className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                            placeholder="blur"
                            blurDataURL={BLUR_DATA_URL}
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                    </motion.div>
                    <div className="space-y-16">
                        <div className="space-y-8">
                            <motion.h3
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-7xl font-serif leading-tight"
                            >
                                Crafted for the <br /> <span className="italic">0.1%.</span>
                            </motion.h3>
                            <p className="text-xl text-gray-500 leading-relaxed font-light max-w-lg">
                                Our process transcends traditional design. We execute spatial storytelling through rare materials and artisan hands, ensuring your residence is not just a house—but a curated legacy.
                            </p>
                        </div>

                        <div className="pt-12 border-t border-black/5">
                            <div className="grid grid-cols-2 gap-12">
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest mb-4">The Methodology</h4>
                                    <p className="text-gray-400 text-sm font-light">Bespoke narrative formation based on client heritage and global lifestyle.</p>
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest mb-4">The Result</h4>
                                    <p className="text-gray-400 text-sm font-light">Spatial experiences that elevate human potential and emotional clarity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default ScrollStory;
