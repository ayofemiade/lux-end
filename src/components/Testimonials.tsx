"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Lux End transformed our estate into a sanctuary that truly reflects our family's heritage and modern lifestyle.",
        author: "Eleanor Vanderbilt",
        role: "Property Developer",
    },
    {
        quote: "Their attention to the micro-details of bespoke furniture is unparalleled. It is quiet power in digital form.",
        author: "Julian Thorne",
        role: "CEO, Thorne Group",
    },
];

const Testimonials = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="text-4xl font-serif text-gray-200">“</div>
                            <p className="text-2xl md:text-3xl font-serif leading-relaxed italic pr-12">
                                {t.quote}
                            </p>
                            <div>
                                <p className="font-medium tracking-widest uppercase text-sm">{t.author}</p>
                                <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 pt-20 border-t border-black/5 text-center"
                >
                    <p className="text-sm uppercase tracking-[0.5em] text-gray-400 mb-12">Trusted by</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale items-center">
                        {/* These would be real logos in a real app */}
                        <span className="text-2xl font-serif">AESTHETICA</span>
                        <span className="text-2xl font-serif">DOMAIN</span>
                        <span className="text-2xl font-serif">VANGUARD</span>
                        <span className="text-2xl font-serif">LUXE RE</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
