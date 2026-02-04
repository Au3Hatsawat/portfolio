'use client';
import { motion } from "framer-motion";
import React from "react";

interface SkillCardProps {
    title: string;
    skills: string[];
    icon: React.ReactNode;
    className?: string;
    gradient: string;
}

const SkillCard = ({ title, skills, icon, className, gradient }: SkillCardProps) => {
    return (
        <motion.div 
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`relative overflow-hidden rounded-[2.5rem] p-8 flex flex-col gap-6 border border-white/10 shadow-2xl ${className} ${gradient}`}
        >
            <div className="flex justify-between items-center">
                <div className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                    {icon}
                </div>
            </div>
            
            <div>
                <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <span 
                            key={i} 
                            className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/5 hover:bg-white/20 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* แสงฟุ้ง Art Background */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 blur-[50px] rounded-full" />
        </motion.div>
    );
};

export default SkillCard;