"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/Button";
import Image from "next/image";

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
                />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-10 text-center text-white px-6"
            >
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-8xl font-serif mb-6 tracking-tight leading-[1.1]"
                >
                    Designing Spaces <br className="hidden sm:block" /> That Speak Luxury
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-sm md:text-xl uppercase tracking-[0.2em] md:tracking-[0.3em] font-light mb-8 md:mb-12 text-zinc-300"
                >
                    Bespoke Interior & Furniture Design
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <Button
                        variant="secondary"
                        size="md"
                        className="md:scale-110"
                        onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Book Consultation
                    </Button>
                </motion.div>

            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-4"
            >
                <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 64] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-1/2 bg-white absolute top-0"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
