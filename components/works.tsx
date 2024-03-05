import { works } from "@/constants";
import { WorkCard } from "./work-card";

export const Works = () => {
  return (
    <section className="h-screen px-56 py-6 space-y-10">
      <p className="text-xl font-normal">Featured works</p>
      <div className="space-y-6">
        {works.map((work) => (
          <WorkCard
            src={work.src}
            key={work.type}
            title={work.title}
            description={work.description}
            year={work.year}
            type={work.type}
          />
        ))}
      </div>
    </section>
  );
};
