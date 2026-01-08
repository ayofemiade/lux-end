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
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[10px] md:text-sm uppercase tracking-[0.5em] mb-4 text-zinc-500 font-light underline underline-offset-8 decoration-zinc-800">The Commissioning Process</h2>
                    <h3 className="text-3xl md:text-6xl font-serif leading-tight">Define Your Domain</h3>
                </div>

                <div className="relative min-h-[450px] md:min-h-[400px] border border-zinc-800 p-6 md:p-16 flex flex-col justify-center items-center luxury-shadow">
                    <AnimatePresence mode="wait">
                        {!isFinished ? (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="w-full text-center"
                            >
                                <div className="flex justify-center items-center space-x-4 mb-4">
                                    <div className="h-px w-8 bg-zinc-800" />
                                    <p className="text-zinc-500 uppercase tracking-widest text-[10px]">Step {step + 1} of {steps.length}</p>
                                    <div className="h-px w-8 bg-zinc-800" />
                                </div>
                                <h4 className="text-xl md:text-3xl font-serif mb-10 md:mb-12 leading-relaxed">{steps[step].title}</h4>
                                <div className="grid gap-3 md:gap-4">
                                    {steps[step].options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleSelect(option)}
                                            className="group relative py-4 md:py-6 px-6 md:px-8 border border-zinc-900 hover:border-white transition-all duration-300 overflow-hidden"
                                        >
                                            <span className="relative z-10 uppercase tracking-widest text-xs md:text-sm font-light">{option}</span>
                                            <motion.div
                                                initial={false}
                                                whileHover={{ y: 0 }}
                                                className="absolute inset-x-0 bottom-0 top-0 bg-white/5 -translate-y-[100%] transition-transform duration-500"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center px-4"
                            >
                                <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-2 h-2 bg-white rounded-full"
                                    />
                                </div>
                                <h4 className="text-2xl md:text-4xl font-serif mb-6 leading-tight">Concierge Invitation Confirmed</h4>
                                <p className="text-zinc-400 mb-10 max-w-sm mx-auto leading-relaxed text-sm md:text-base font-light">
                                    Our private design consultant will reach out within 24 hours to schedule your exclusive session.
                                </p>
                                <Button variant="secondary" size="md" onClick={() => { setStep(0); setSelections([]); setIsFinished(false); }}>Reset Application</Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};


export default ConsultationForm;
