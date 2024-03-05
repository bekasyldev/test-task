import { icons } from "@/constants";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="h-48 flex flex-col  items-center justify-center gap-y-4">
      <div className="flex gap-x-6">
        {icons.map((icon) => (
          <Image
            key={icon.src}
            src={icon.src}
            alt={icon.src}
            width={30}
            height={30}
          />
        ))}
      </div>
      <p className="text-[#21243D] text-xs">
        Copyright ©2020 All rights reserved
      </p>
    </footer>
  );
};
