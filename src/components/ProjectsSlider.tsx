"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        <section id="projects" className="py-24 md:py-32 bg-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] mb-4 text-gray-400 font-light underline underline-offset-8 decoration-black/5">The Collective</h2>
                        <h3 className="text-3xl md:text-6xl font-serif leading-tight">Portraits of <br className="hidden md:block" /> Distinction</h3>
                    </div>
                    <div className="flex space-x-4 mt-8 md:mt-0">
                        <button
                            onClick={prev}
                            className="p-3 md:p-4 border border-black/10 hover:border-black transition-colors rounded-full"
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={next}
                            className="p-3 md:p-4 border border-black/10 hover:border-black transition-colors rounded-full"
                            aria-label="Next project"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="relative cursor-grab active:cursor-grabbing">
                    <motion.div
                        initial={false}
                        animate={{ x: `-${index * (isMobile ? 100 : 50)}%` }}
                        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                        className="flex"
                    >

                        {projects.map((project) => (
                            <div key={project.id} className="min-w-full md:min-w-[50%] md:pr-8 group h-full">
                                <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden mb-6 md:mb-8 luxury-shadow bg-zinc-100">
                                    <Image
                                        src={project.imagePath}
                                        alt={project.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="bg-white text-black px-6 py-3 text-xs uppercase tracking-widest font-medium">View Project</span>
                                    </div>
                                </div>
                                <div className="space-y-2 px-1">
                                    <div className="flex items-center space-x-2">
                                        <span className="h-px w-8 bg-black/20" />
                                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500">{project.space} — {project.location}</p>
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-serif">{project.name}</h4>
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
