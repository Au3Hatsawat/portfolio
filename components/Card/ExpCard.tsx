'use client';
import { Experience } from "@/types/portfolio";
import { motion } from "framer-motion";

interface WorkExperienceCardProps {
    experience: Experience;
}

const WorkExperienceCard = ({ experience }: WorkExperienceCardProps) => {
    return (
        <motion.div
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative flex flex-col w-full p-6 rounded-2xl transition-all duration-500 hover:bg-white/3 border border-transparent hover:border-primary/20"
        >
            <motion.div
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary origin-top transition-transform duration-500"
            />

            <div className="flex flex-col md:flex-row md:items-baseline justify-between w-full mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {experience.title}
                    <span className="mx-2 text-muted-foreground/30 font-light">/</span>
                    <span className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {experience.company}
                    </span>
                </h3>
                <span className="text-sm font-mono text-muted-foreground tracking-tighter uppercase">
                    {experience.period}
                </span>
            </div>

            <div className="space-y-3">
                {experience.description.map((desc, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 1 }}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors"
                    >
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                        <p>{desc}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default WorkExperienceCard;