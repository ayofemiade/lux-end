"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";

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
        <section className="py-20 md:py-32 bg-gray-soft overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] mb-4 text-gray-400 font-light">The Materiality of Art</h2>
                    <h3 className="text-3xl md:text-6xl font-serif leading-tight">Precision in Every Selection</h3>
                </div>

                <div className="relative aspect-[4/5] md:aspect-video w-full overflow-hidden luxury-shadow bg-zinc-200">
                    <Image
                        src="/interactive_project.png"
                        alt="Interactive Interior"
                        fill
                        sizes="(max-width: 768px) 100vw, 80vw"
                        className="object-cover"
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
                                className="relative group h-8 w-8 md:h-10 md:w-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                                aria-label={`View details about ${spot.title}`}
                            >
                                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping group-hover:bg-white/50" />
                                <div className="relative h-3 w-3 md:h-4 md:w-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <Plus size={10} className="text-black" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {active === spot.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute z-20 top-8 md:top-12 left-1/2 -translate-x-1/2 w-48 md:w-64 bg-white p-4 md:p-6 shadow-2xl pointer-events-none md:pointer-events-auto"
                                    >
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                                        <div className="flex justify-between items-start mb-2">
                                            <h5 className="font-serif text-base md:text-lg">{spot.title}</h5>
                                            <button className="md:hidden" onClick={() => setActive(null)}>
                                                <X size={14} className="text-gray-400" />
                                            </button>
                                        </div>
                                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{spot.description}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Mobile Info List fallback/extra */}
                <div className="mt-12 md:hidden space-y-8">
                    {hotspots.map((spot) => (
                        <div key={spot.id} className="border-l border-black/10 pl-6">
                            <h5 className="font-serif text-xl mb-2">{spot.title}</h5>
                            <p className="text-sm text-gray-500 leading-relaxed font-light">{spot.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotspotProject;

