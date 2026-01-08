"use client";

import Link from "next/link";
import { Button } from "./ui/Button";

const Footer = () => {
    return (
        <footer className="bg-white pt-32 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                    <h2 className="text-4xl md:text-7xl font-serif mb-12">
                        Commission <br /> Your Sanctuary.
                    </h2>
                    <Button variant="primary" size="lg" onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}>
                        Initiate Inquiry
                    </Button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-20 border-t border-black/5">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-serif tracking-[0.2em] uppercase">
                            Lux End
                        </Link>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Explore</span>
                        <button onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })} className="text-left text-sm uppercase tracking-widest hover:opacity-50 transition-opacity">Vision</button>
                        <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-left text-sm uppercase tracking-widest hover:opacity-50 transition-opacity">Projects</button>
                        <button onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })} className="text-left text-sm uppercase tracking-widest hover:opacity-50 transition-opacity">Consultation</button>
                    </div>


                    <div className="flex flex-col space-y-4">
                        <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Legal</span>
                        <Link href="#" className="text-sm uppercase tracking-widest hover:opacity-50 transition-opacity">Privacy Policy</Link>
                        <Link href="#" className="text-sm uppercase tracking-widest hover:opacity-50 transition-opacity">Terms of Service</Link>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Social</span>
                        <Link href="#" className="text-sm uppercase tracking-widest hover:opacity-50 transition-opacity">Instagram</Link>
                        <Link href="#" className="text-sm uppercase tracking-widest hover:opacity-50 transition-opacity">LinkedIn</Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-12 border-t border-black/5 space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.4em] text-gray-400">
                    <p>© 2026 Lux End Furniture. All Rights Reserved.</p>
                    <p>Designed for the Exceptional.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
