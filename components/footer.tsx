import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="h-48 flex flex-col  items-center justify-center gap-y-4">
      <div className="flex gap-x-6">
        <Image src={"/icons/fb.svg"} alt="facebook" width={30} height={30} />
        <Image
          src={"/icons/insta.svg"}
          alt="instagram"
          width={30}
          height={30}
        />
        <Image
          src={"/icons/twitter.svg"}
          alt="twitter"
          width={30}
          height={30}
        />
        <Image src={"/icons/ln.svg"} alt="linkedin" width={30} height={30} />
      </div>
      <p className="text-[#21243D] text-xs">
        Copyright ©2020 All rights reserved
      </p>
    </footer>
  );
};
