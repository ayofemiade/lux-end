"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
    );

    const color = useTransform(
        scrollY,
        [0, 100],
        ["#ffffff", "#000000"]
    );

    const shadow = useTransform(
        scrollY,
        [0, 100],
        ["none", "0 4px 30px rgba(0, 0, 0, 0.05)"]
    );

    const navLinks = [
        { name: "Vision", id: "vision" },
        { name: "Projects", id: "projects" },
        { name: "Consultation", id: "consultation" },
    ];

    const scrollTo = (id: string) => {
        setIsOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            style={{ backgroundColor, color, boxShadow: shadow }}
            className="fixed top-0 left-0 right-0 z-[60] transition-all duration-300 backdrop-blur-[4px]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between">
                <Link href="/" className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase">
                    Lux End
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-12 text-[10px] uppercase tracking-[0.2em] font-light">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollTo(link.id)}
                            className="hover:opacity-50 transition-opacity uppercase tracking-widest"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollTo('consultation')}
                        className="px-6 py-2 border border-current hover:bg-current hover:text-white transition-all duration-300"
                    >
                        Inquiry
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="md:hidden bg-white text-black fixed inset-0 z-50 overflow-hidden flex flex-col justify-center items-center space-y-12 px-6"
                    >
                        <button
                            className="absolute top-8 right-6 p-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} strokeWidth={1} />
                        </button>

                        <div className="flex flex-col items-center space-y-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i + 0.3 }}
                                >
                                    <button
                                        onClick={() => scrollTo(link.id)}
                                        className="text-3xl font-serif tracking-widest uppercase"
                                    >
                                        {link.name}
                                    </button>
                                </motion.div>
                            ))}
                        </div>


                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="pt-12"
                        >
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-12 py-5 bg-black text-white uppercase tracking-[0.2em] text-xs"
                            >
                                Book Consultation
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};


export default Navbar;
