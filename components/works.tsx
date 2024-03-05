import { WorkCard } from "./work-card";

const works = [
  {
    title: "Designing Dashboards",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    type: "Dashboard",
    year: 2020,
    src: "/work-1.png",
  },
  {
    title: "Vibrant Portraits of 2020",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    type: "Illustration",
    year: 2018,
    src: "/work-2.png",
  },
  {
    title: "36 Days of Malayalam type",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    type: "Typography",
    year: 2018,
    src: "/work-3.png",
  },
];

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
