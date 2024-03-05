import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center lg:flex-row-reverse gap-x-60">
      <Image src={"/hero.png"} alt="hero-logo" width={243} height={243} />
      <div className="flex flex-col items-start justify-start space-y-8">
        <h1 className="text-5xl font-bold">
          Hi, I am John,
          <br /> Creative Technologist
        </h1>
        <p className="">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet{" "}
          <br />
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam <br />
          consequat sunt nostrud amet.
        </p>
        <Button size={"lg"} className="bg-[#FF6464] rounded-none text-lg">
          Download Resume
        </Button>
      </div>
    </div>
  );
};
