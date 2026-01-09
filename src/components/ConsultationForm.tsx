"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/Button";

const steps = [
    {
        title: "Choose your space type",
        options: ["Residential", "Commercial", "Hospitality"],
    },
    {
        title: "Estimated Budget",
        options: ["$50k - $100k", "$100k - $500k", "$500k+"],
    },
    {
        title: "Preferred Style",
        options: ["Ultra-Minimal", "Modern Classic", "Art Deco Heritage"],
    },
];

const ConsultationForm = () => {
    const [step, setStep] = useState(0);
    const [selections, setSelections] = useState<string[]>([]);
    const [isFinished, setIsFinished] = useState(false);

    const handleSelect = (option: string) => {
        const newSelections = [...selections, option];
        setSelections(newSelections);
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            setIsFinished(true);
        }
    };

    return (
        <section id="consultation" className="py-24 md:py-40 bg-black text-white px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-[10px] md:text-sm uppercase tracking-[0.6em] mb-6 text-zinc-500 font-light underline underline-offset-[12px] decoration-zinc-800">The Commissioning Process</h2>
                    <h3 className="text-3xl md:text-7xl font-serif leading-tight">Define Your Domain</h3>
                </div>

                <div className="relative min-h-[500px] md:min-h-[450px] border border-zinc-800 p-8 md:p-24 flex flex-col justify-center items-center luxury-shadow bg-zinc-950/50 backdrop-blur-sm">
                    <AnimatePresence mode="wait">
                        {!isFinished ? (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full text-center"
                            >
                                <div className="flex justify-center items-center space-x-6 mb-8">
                                    <div className="h-px w-10 bg-zinc-800" />
                                    <p className="text-zinc-500 uppercase tracking-[0.3em] text-[10px]">Step {step + 1} of {steps.length}</p>
                                    <div className="h-px w-10 bg-zinc-800" />
                                </div>
                                <h4 className="text-2xl md:text-4xl font-serif mb-12 md:mb-16 leading-relaxed text-zinc-200">{steps[step].title}</h4>
                                <div className="grid gap-4 md:gap-6 max-w-xl mx-auto">
                                    {steps[step].options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleSelect(option)}
                                            className="group relative py-6 md:py-8 px-10 border border-zinc-900 hover:border-white transition-all duration-700 overflow-hidden text-zinc-400 hover:text-white"
                                        >
                                            <span className="relative z-10 uppercase tracking-[0.2em] text-xs md:text-sm font-light">{option}</span>
                                            <motion.div
                                                initial={false}
                                                whileHover={{ y: 0 }}
                                                className="absolute inset-x-0 bottom-0 top-0 bg-white/[0.03] -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center px-4"
                            >
                                <div className="w-20 h-20 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-10 relative">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [0, 1.2, 1] }}
                                        className="w-3 h-3 bg-white rounded-full"
                                    />
                                    <div className="absolute inset-0 border border-white/5 rounded-full animate-pulse" />
                                </div>
                                <h4 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Request Received</h4>
                                <p className="text-zinc-500 mb-12 max-w-md mx-auto leading-relaxed text-base md:text-lg font-light">
                                    Our private concierge will contact you within 24 hours to begin your design consultation.
                                </p>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="px-12"
                                    onClick={() => { setStep(0); setSelections([]); setIsFinished(false); }}
                                >
                                    New Inquiry
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};


export default ConsultationForm;
