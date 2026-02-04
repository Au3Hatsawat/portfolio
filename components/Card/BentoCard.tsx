'use client';
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clipboard, ExternalLink } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface BentoCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    className?: string;
    gradient: string;
    isLink?: boolean;
    link?: string;
}

const BentoCard = ({ title, value, icon, className, gradient, isLink, link }: BentoCardProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        if (!isLink) {
            e.preventDefault();
            e.stopPropagation();
            navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }

    return (
        <motion.div
            onClick={handleCopy}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`group relative rounded-4xl border border-white/10 shadow-xl overflow-hidden ${className} ${gradient}`}
        >
            <Link
                href={link || "#"}
                target={isLink ? "_blank" : undefined}
                className="flex flex-col justify-between p-6 h-full w-full relative z-10"
            >
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl shadow-inner border border-white/10">
                        {icon}
                    </div>

                    <div className="relative">
                        {isLink ? (
                            <ExternalLink size={18} className="text-white/40 group-hover:text-white transition-colors" />
                        ) : (
                            <button
                                onClick={handleCopy}
                                className="relative p-2 rounded-xl hover:bg-white/10 transition-colors pointer-events-auto"
                            >
                                <AnimatePresence mode="wait">
                                    {copied ? (
                                        <motion.div
                                            key="check"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                        >
                                            <Check size={18} className="text-emerald-400" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="copy"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                        >
                                            <Clipboard size={18} className="text-white/40 group-hover:text-white transition-colors" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence>
                                    {copied && (
                                        <motion.span
                                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                                            animate={{ opacity: 1, y: -30, x: "-50%" }}
                                            exit={{ opacity: 0 }}
                                            className="absolute left-1/2 -translate-x-1/2 text-[10px] font-bold bg-emerald-500 text-white px-2 py-1 rounded-md shadow-lg"
                                        >
                                            COPIED!
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        )}
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{title}</p>
                    <h3 className="text-white text-lg font-bold truncate tracking-tight">{value}</h3>
                </div>

                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/10 blur-3xl rounded-full group-hover:bg-white/20 transition-all duration-500" />
            </Link>
        </motion.div>
    );
};

export default BentoCard;