"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const next = () => setIndex((i) => (i + 1) % projects.length);
    const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

    return (
        <section id="projects" className="py-24 md:py-40 bg-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 text-gray-400 font-light underline underline-offset-8 decoration-black/5"
                        >
                            The Collective
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-7xl font-serif leading-[1.1]"
                        >
                            Portraits of <br className="hidden md:block" /> Distinction
                        </motion.h3>
                    </div>
                    <div className="flex space-x-4 mt-12 md:mt-0">
                        <button
                            onClick={prev}
                            className="p-4 md:p-6 border border-black/10 hover:border-black transition-all duration-500 rounded-full hover:bg-black hover:text-white group"
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={next}
                            className="p-4 md:p-6 border border-black/10 hover:border-black transition-all duration-500 rounded-full hover:bg-black hover:text-white group"
                            aria-label="Next project"
                        >
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <motion.div
                        initial={false}
                        animate={{ x: `-${index * (isMobile ? 100 : 50)}%` }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex"
                    >

                        {projects.map((project) => (
                            <div key={project.id} className="min-w-full md:min-w-[50%] md:pr-12 group h-full">
                                <div className="relative aspect-[4/5] overflow-hidden mb-8 md:mb-12 luxury-shadow bg-zinc-100">
                                    <Image
                                        src={project.imagePath}
                                        alt={project.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        placeholder="blur"
                                        blurDataURL={BLUR_DATA_URL}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700" />
                                    <div className="absolute inset-0 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <span className="bg-white text-black px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-medium shadow-2xl">View Project</span>
                                    </div>
                                </div>
                                <div className="space-y-4 px-1">
                                    <div className="flex items-center space-x-3">
                                        <span className="h-px w-10 bg-black/20" />
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">{project.space} — {project.location}</p>
                                    </div>
                                    <h4 className="text-2xl md:text-4xl font-serif group-hover:translate-x-2 transition-transform duration-500">{project.name}</h4>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default ProjectsSlider;
