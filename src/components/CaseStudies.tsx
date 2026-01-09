"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const caseStudies = [
    {
        title: "The Glass Pavilion",
        category: "Architectural Interior",
        description: "A seamless integration of indoor and outdoor living in the hills of Aspen. Using structural glass and reclaimed wood to create a warm, modern sanctuary.",
        stats: [
            { label: "Timeline", value: "14 Months" },
            { label: "Impact", value: "+40% Value" }
        ],
        image: "/luxury_showroom.png"
    },
    {
        title: "Majestic Heights",
        category: "Penthouse Suite",
        description: "Redefining vertical living in London's skyline. A masterclass in dark textures, custom lighting, and bespoke joinery for the ultimate executive retreat.",
        stats: [
            { label: "Area", value: "4,500 sqft" },
            { label: "Custom Pieces", value: "32" }
        ],
        image: "/interactive_project.png"
    }
];

const CaseStudies = () => {
    return (
        <section className="py-24 md:py-40 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] mb-4 text-gray-400 font-light underline underline-offset-8 decoration-black/5">Narrative Portfolios</h2>
                    <h3 className="text-3xl md:text-6xl font-serif leading-tight">Stories of <br className="hidden md:block" /> Transformation</h3>
                </div>

                <div className="grid gap-12">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className={`group flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
                        >
                            <div className="w-full md:w-3/5 relative aspect-[16/10] overflow-hidden luxury-shadow grayscale hover:grayscale-0 transition-all duration-1000">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>

                            <div className="w-full md:w-2/5 space-y-8">
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 block">{study.category}</span>
                                    <h4 className="text-3xl md:text-4xl font-serif mb-6">{study.title}</h4>
                                    <p className="text-gray-500 leading-relaxed font-light">{study.description}</p>
                                </div>

                                <div className="flex gap-12">
                                    {study.stats.map((stat, sIndex) => (
                                        <div key={sIndex}>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{stat.label}</p>
                                            <p className="text-xl font-serif">{stat.value}</p>
                                        </div>
                                    ))}
                                </div>

                                <button className="group/btn flex items-center space-x-4 text-xs uppercase tracking-widest border-b border-black/10 pb-2 hover:border-black transition-all">
                                    <span>Read Full Case Study</span>
                                    <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
