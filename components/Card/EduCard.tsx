'use client';
import { Education } from "@/types/portfolio";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

interface EducationCardProps {
    education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 hover:bg-muted/30 border border-transparent hover:border-primary/10"
        >
            <div className="relative shrink-0">
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-muted group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    <GraduationCap size={24} />
                </div>
            </div>

            <div className="flex flex-col gap-1 w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {education.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
                        <Calendar size={12} />
                        {education.period}
                    </div>
                </div>
                
                <p className="text-sm text-muted-foreground font-medium leading-relaxed uppercase tracking-widest opacity-80">
                    {education.degree}
                </p>

                <div className="h-0.5 w-8 bg-primary/30 mt-3 group-hover:w-full transition-all duration-700 ease-in-out" />
            </div>
        </motion.div>
    );
}

export default EducationCard;