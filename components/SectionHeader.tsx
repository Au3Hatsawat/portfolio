'use client';
import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    subTitle: string;
}

const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
    return (
        <div className="relative mb-10 group/header">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic leading-none text-foreground">
                {title} <span className="text-primary not-italic">{subTitle}</span>
            </h2>

            <div className="relative h-1.5 w-24 bg-muted mt-4 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "easeInOut" 
                    }}
                    className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-primary to-transparent"
                />
                
                <motion.div 
                    className="absolute inset-0 bg-primary opacity-0 group-hover/header:opacity-100 transition-opacity duration-500"
                    whileHover={{ width: "100%" }}
                />
            </div>

            <span className="absolute -top-4 -left-2 text-7xl font-black opacity-[0.03] select-none -z-10 tracking-[0.2em]">
                {title}
            </span>
        </div>
    );
};

export default SectionHeader;