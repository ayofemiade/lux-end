"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { BLUR_DATA_URL } from "@/lib/constants";

const hotspots = [
    {
        id: 1,
        x: "30%",
        y: "60%",
        title: "Hand-stitched Leather",
        description: "Sourced from the finest tanneries in Tuscany, ensuring tactile perfection and durability.",
    },
    {
        id: 2,
        x: "70%",
        y: "40%",
        title: "Bespoke Lighting",
        description: "Custom-made brass fixtures designed to interact perfectly with natural shadows.",
    },
    {
        id: 3,
        x: "50%",
        y: "80%",
        title: "Eco-Wool Rug",
        description: "Sustainably harvested and hand-woven to provide an unmatched underfoot experience.",
    },
];

const HotspotProject = () => {
    const [active, setActive] = useState<number | null>(null);

    return (
        <section className="py-24 md:py-40 bg-zinc-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-[10px] md:text-sm uppercase tracking-[0.5em] mb-4 text-gray-400 font-light underline underline-offset-8 decoration-black/5">The Materiality of Art</h2>
                    <h3 className="text-3xl md:text-6xl font-serif leading-tight">Precision in Every Selection</h3>
                </div>

                <div className="relative aspect-[4/5] md:aspect-video w-full overflow-hidden luxury-shadow bg-zinc-200">
                    <Image
                        src="/interactive_project.png"
                        alt="Interactive Interior"
                        fill
                        sizes="(max-width: 768px) 100vw, 80vw"
                        className="object-cover transition-transform duration-[3000ms] hover:scale-105"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                    />

                    <div className="absolute inset-0 bg-black/5" />

                    {hotspots.map((spot) => (
                        <div
                            key={spot.id}
                            className="absolute"
                            style={{ left: spot.x, top: spot.y }}
                        >
                            <button
                                onClick={() => setActive(active === spot.id ? null : spot.id)}
                                onMouseEnter={() => setActive(spot.id)}
                                onMouseLeave={() => setActive(null)}
                                className="relative group h-10 w-10 md:h-12 md:w-12 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                                aria-label={`View details about ${spot.title}`}
                            >
                                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping group-hover:bg-white/40" />
                                <div className="relative h-4 w-4 md:h-5 md:w-5 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-125">
                                    <Plus size={12} className="text-black" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {active === spot.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute z-20 top-10 md:top-14 left-1/2 -translate-x-1/2 w-56 md:w-72 bg-white p-6 md:p-8 shadow-2xl pointer-events-none md:pointer-events-auto border border-black/5"
                                    >
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                                        <div className="flex justify-between items-start mb-4">
                                            <h5 className="font-serif text-lg md:text-xl">{spot.title}</h5>
                                            <button className="md:hidden" onClick={() => setActive(null)}>
                                                <X size={16} className="text-gray-400" />
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-500 leading-relaxed font-light">{spot.description}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:hidden grid gap-8">
                    {hotspots.map((spot) => (
                        <motion.div
                            key={spot.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="border-l-2 border-black/5 pl-8 py-2"
                        >
                            <h5 className="font-serif text-2xl mb-4">{spot.title}</h5>
                            <p className="text-base text-gray-500 leading-relaxed font-light">{spot.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotspotProject;

