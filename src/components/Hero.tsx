"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/Button";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/constants";

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background with Parallax */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/hero_luxury_interior.png"
                    alt="Luxury Interior Design"
                    fill
                    className="object-cover opacity-80"
                    priority
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 text-center text-white px-6 w-full max-w-7xl mx-auto"
            >
                <motion.h1
                    className="text-4xl sm:text-6xl md:text-[clamp(3.5rem,8vw,8rem)] font-serif mb-8 tracking-tight leading-[0.95]"
                >
                    Designing Spaces <br className="hidden sm:block" /> That Speak <span className="italic text-white underline decoration-white/20 underline-offset-8">Luxury</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, letterSpacing: "0.1em" }}
                    animate={{ opacity: 1, letterSpacing: "0.4em" }}
                    transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                    className="text-xs md:text-sm uppercase font-medium mb-12 md:mb-16 text-white/80 drop-shadow-sm max-w-xl mx-auto"
                >
                    Mastering the Art of Bespoke Living
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button
                        variant="secondary"
                        size="lg"
                        className="group relative overflow-hidden px-10 py-5 transition-transform hover:scale-105 active:scale-95"
                        onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="relative z-10">Book Consultation</span>
                        <motion.div
                            className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        />
                    </Button>
                </motion.div>

            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-4"
            >
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2">Scroll to Explore</span>
                <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [-80, 80] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-1/2 bg-white absolute top-0"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
