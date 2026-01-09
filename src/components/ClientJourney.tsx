"use client";

import { motion } from "framer-motion";
import { Search, PenTool, ClipboardCheck, Sparkles } from "lucide-react";

const steps = [
    {
        title: "The Inquiry",
        description: "Initial personal consultation to understand your legacy, lifestyle, and spatial aspirations.",
        icon: Search,
    },
    {
        title: "The Narrative",
        description: "We develop a unique architectural story, curated material palettes, and bespoke furniture concepts.",
        icon: PenTool,
    },
    {
        title: "The Curation",
        description: "Global sourcing of rare materials and artisan collaboration to bring the vision to life.",
        icon: ClipboardCheck,
    },
    {
        title: "The Reveal",
        description: "Final walkthrough of your transformed domain—a space that truly speaks luxury.",
        icon: Sparkles,
    },
];

const ClientJourney = () => {
    return (
        <section className="py-24 md:py-40 bg-black text-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 text-zinc-500 font-light underline underline-offset-[12px] decoration-zinc-800">The Private Process</h2>
                    <h3 className="text-3xl md:text-6xl font-serif">The Path to <span className="italic">Distinction</span></h3>
                </div>

                <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-zinc-800 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:border-white transition-colors duration-500">
                                <step.icon size={20} className="text-zinc-500 group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="text-xl font-serif mb-4">{step.title}</h4>
                            <p className="text-zinc-500 text-sm leading-relaxed font-light px-4">{step.description}</p>

                            {/* Step number */}
                            <span className="absolute -top-4 -left-2 text-[60px] font-serif text-white/[0.03] select-none pointer-events-none">0{index + 1}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientJourney;
