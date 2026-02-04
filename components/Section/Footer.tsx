'use client';
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="mt-20 pb-10 px-4">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-6xl mx-auto border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6"
            >
                <div className="flex flex-col items-center md:items-start gap-2">
                    <p className="text-sm font-mono tracking-widest text-muted-foreground uppercase">
                        © 2026 <span className="text-primary font-bold">Au3Hatsawat</span>
                    </p>
                    <p className="text-[10px] text-muted-foreground/40 uppercase tracking-tighter">
                        All Rights Reserved.
                    </p>
                </div>

                <div className="flex items-center gap-4 text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest">
                    <span>Next.js</span>
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    <span>Tailwind</span>
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    <span>Framer Motion</span>
                </div>

                <div className="text-[10px] text-muted-foreground/40 font-mono uppercase">
                    Last Updated: Feb 2026
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;