import Image from "next/image";

interface WorkCardProps {
  title: string;
  description: string;
  year: number;
  type: string;
  src: string;
}

export const WorkCard = ({
  src,
  title,
  description,
  year,
  type,
}: WorkCardProps) => {
  return (
    <div className="w-full flex border-b border-slate-200 pb-4 space-x-4">
      <Image src={src} alt={src} width={346} height={180} />
      <div className="space-y-4">
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="space-x-6">
          <span className="bg-[#142850] text-xs rounded-2xl font-semibold text-white px-2 p-1">
            {year}
          </span>
          <span className="text-slate-400">{type}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
