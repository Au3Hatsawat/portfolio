'use client';
import { PortfolioData } from "@/types/portfolio";
import { ThemeToggle } from "../ThemeToggle";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import BentoCard from "../Card/BentoCard";
import Link from "next/link";

interface LeftSectionProps {
    data: PortfolioData;
}

const LeftSection = ({ data }: LeftSectionProps) => {
    return (
        <div className="pt-24 lg:pt-0">
            <div className="sticky flex flex-col gap-6 top-24">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative flex flex-col items-center rounded-[2.5rem] bg-background/50 backdrop-blur-md border border-white/10 shadow-2xl px-8 py-12"
                >
                    <div className="absolute -top-16">
                        <div className="relative p-1 rounded-4xl shadow-2xl">
                            <div className="overflow-hidden rounded-[1.8rem] w-40 h-40">
                                <Image
                                    src="/profile.jpg"
                                    alt="Profile"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-6 right-6">
                        <div>
                            <ThemeToggle />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 items-center mt-24 w-full text-center">
                        <div className="space-y-1">
                            <motion.h1
                                className="text-3xl font-black tracking-tighter bg-primary bg-clip-text text-transparent uppercase italic"
                            >
                                {data?.profile?.name}
                            </motion.h1>
                            <p className="text-primary font-mono text-sm tracking-widest uppercase opacity-80">
                                {data?.profile?.role}
                            </p>
                        </div>

                        <Link href="/hatsawat_intrasod_CV.pdf" target="_blank" className="w-full py-3 flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground font-bold text-xs tracking-[0.2em] uppercase hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                            <Download size={16} />
                            Download Resume
                        </Link>
                    </div>

                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 blur-[100px] -z-10 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-5 gap-4">
                    <BentoCard
                        title="GitHub"
                        value="Click to View"
                        icon={<Github className="text-white" />}
                        gradient="bg-[#0d1117] col-span-3 shadow-lg"
                        isLink={true}
                        link={data?.profile?.github}
                    />

                    <BentoCard
                        title="LinkedIn"
                        value="Click to View"
                        icon={<Linkedin className="text-white" />}
                        gradient="bg-[#0077b5] col-span-2 shadow-lg"
                        isLink={true}
                        link={data?.profile?.linkedin}
                    />

                    <BentoCard
                        title="Phone"
                        value={data?.profile?.phone}
                        icon={<Phone className="text-white" />}
                        gradient="bg-[#1a1a1a] col-span-2 border border-primary/20 shadow-lg"
                    />

                    <BentoCard
                        title="Email"
                        value={data?.profile?.email}
                        icon={<Mail className="text-white" />}
                        gradient="bg-gradient-to-br from-slate-800 to-slate-900 col-span-3 shadow-lg"
                    />

                </div>
            </div>
        </div>
    );
};

export default LeftSection;