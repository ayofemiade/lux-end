"use client";

"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BLUR_DATA_URL } from "@/lib/constants";

const projects = [
    {
        id: 1,
        name: "The Obsidian Penthouse",
        space: "Living Area",
        location: "Miami",
        imagePath: "/hero_luxury_interior.png",
    },
    {
        id: 2,
        name: "Minimalist Estate",
        space: "Master Suite",
        location: "London",
        imagePath: "/interactive_project.png",
    },
    {
        id: 3,
        name: "Executive Sanctuary",
        space: "Bespoke Office",
        location: "New York",
        imagePath: "/luxury_office.png",
    },
    {
        id: 4,
        name: "The Azure Lounge",
        space: "Commercial Space",
        location: "Dubai",
        imagePath: "/luxury_commercial.png",
    },
    {
        id: 5,
        name: "Heritage Villa",
        space: "Detail Study",
        location: "Tuscany",
        imagePath: "/vision_luxury_details.png",
    },
];

const ProjectsSlider = () => {
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const next = () => setIndex((i) => (i + 1) % projects.length);
    const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

    // Animation variants for the slider
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section id="projects" className="py-24 md:py-40 bg-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 text-gray-400 font-light"
                        >
                            The Collective
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-7xl font-serif leading-[1.1]"
                        >
                            Portraits of <br className="hidden md:block" /> Distinction
                        </motion.h3>
                    </div>

                    <div className="flex space-x-3 md:space-x-4">
                        <button
                            onClick={prev}
                            className="p-4 md:p-6 border border-black/10 hover:border-black transition-all duration-500 rounded-full hover:bg-black hover:text-white group flex items-center justify-center"
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={next}
                            className="p-4 md:p-6 border border-black/10 hover:border-black transition-all duration-500 rounded-full hover:bg-black hover:text-white group flex items-center justify-center"
                            aria-label="Next project"
                        >
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div
                    className="relative cursor-grab active:cursor-grabbing touch-pan-y"
                    ref={containerRef}
                >
                    <motion.div
                        initial={false}
                        animate={{ x: `-${index * (isMobile ? 100 : 50)}%` }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            if (info.offset.x < -100) next();
                            else if (info.offset.x > 100) prev();
                        }}
                    >
                        {projects.map((project) => (
                            <div key={project.id} className="min-w-full md:min-w-[50%] pr-0 md:pr-12 group">
                                <div className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden mb-8 md:mb-12 luxury-shadow bg-zinc-100">
                                    <Image
                                        src={project.imagePath}
                                        alt={project.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                                        placeholder="blur"
                                        blurDataURL={BLUR_DATA_URL}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className="absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                                        <div className="bg-white/90 backdrop-blur-md text-black px-10 py-5 text-[10px] uppercase tracking-[0.4em] font-medium shadow-2xl hover:bg-black hover:text-white transition-colors cursor-pointer">
                                            View Monograph
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 px-2">
                                    <div className="flex items-center space-x-4">
                                        <span className="h-px w-12 bg-black/10 group-hover:w-20 group-hover:bg-black transition-all duration-700" />
                                        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 group-hover:text-black transition-colors duration-500">
                                            {project.space} — {project.location}
                                        </p>
                                    </div>
                                    <h4 className="text-3xl md:text-5xl font-serif leading-tight">{project.name}</h4>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Pagination Indicator */}
                <div className="mt-16 flex items-center justify-center space-x-4">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-gray-300">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-40 h-px bg-zinc-100 relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-black"
                            initial={false}
                            animate={{
                                left: `${(index / (projects.length - 1)) * 100}%`,
                                width: `${100 / projects.length}%`
                            }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-gray-300">
                        {String(projects.length).padStart(2, '0')}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSlider;
