import { PortfolioData } from "@/types/portfolio";
import WorkExperienceCard from "../Card/ExpCard";
import EducationCard from "../Card/EduCard";
import { Code2, Database, Layout, Terminal } from "lucide-react";
import SkillCard from "../Card/SkillCard";
import SectionHeader from "../SectionHeader";
import Footer from "./Footer";

interface RightSectionProps {
    data: PortfolioData;
}

const RightSection = ({ data }: RightSectionProps) => {
    return (
        <div className="relative space-y-24 pb-20 px-1 md:px-2 overflow-x-hidden w-full">
            
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute bottom-1/2 right-0 w-72 h-72 bg-purple-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <section className="relative group w-full">
                <div className="absolute inset-0 bg-linear-to-l from-primary/10 to-transparent rounded-[2.5rem] md:rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000 pointer-events-none" />
                
                <div className="relative bg-background/40 backdrop-blur-2xl border border-white/5 shadow-2xl rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12">
                    <SectionHeader title="Work" subTitle="Experience" />
                    <div className="space-y-4">
                        {data?.experiences?.map((experience, index) => (
                            <WorkExperienceCard key={index} experience={experience} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full">
                <SectionHeader title="Technical" subTitle="Skills" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                    <SkillCard
                        title="Languages"
                        skills={data?.skills?.languages || []}
                        icon={<Code2 className="text-white" />}
                        gradient="bg-slate-950 md:col-span-2 shadow-xl"
                    />
                    <SkillCard
                        title="Frameworks"
                        skills={data?.skills?.frameworks || []}
                        icon={<Layout className="text-white" />}
                        gradient="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 md:col-span-2 shadow-xl"
                    />
                    <SkillCard
                        title="Databases"
                        skills={data?.skills?.databases || []}
                        icon={<Database className="text-white" />}
                        gradient="bg-zinc-900 md:col-span-1 border-white/5 shadow-xl"
                    />
                    <SkillCard
                        title="Tools & DevOps"
                        skills={data?.skills?.tools || []}
                        icon={<Terminal className="text-white" />}
                        gradient="bg-[#0a0a0a] md:col-span-3 border border-primary/10 shadow-xl"
                    />
                </div>
            </section>

            <section className="relative group w-full">
                <div className="absolute inset-0 bg-linear-to-l from-purple-500/10 to-transparent rounded-[2.5rem] md:rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000 pointer-events-none" />
                
                <div className="relative bg-background/40 backdrop-blur-2xl border border-white/5 shadow-2xl rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12">
                    <SectionHeader title="Academic" subTitle="Education" />
                    <div className="grid grid-cols-1 gap-4 md:gap-6">
                        {data?.education?.map((education, index) => (
                            <EducationCard key={index} education={education} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default RightSection;