import { getPortfolioData } from "@/lib/data";
import LeftSection from "@/components/Section/LeftSection";
import RightSection from "@/components/Section/RightSection";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <main className="min-h-screen mx-auto p-8 lg:p-24 font-outfit grid gap-10 lg:grid-cols-[30%_70%]">
      <LeftSection data={data}/>
      <RightSection data={data}/>
    </main>
  );
}