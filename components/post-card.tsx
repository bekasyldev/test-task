interface PostCardProps {
  title: string;
  description: string;
  data: string;
  category: string;
}

export const PostCard = ({
  title,
  description,
  data,
  category,
}: PostCardProps) => {
  return (
    <div className="h-80 w-[460px] bg-white flex flex-col justify-start items-center px-8 py-8 gap-y-6">
      <h3 className="font-semibold text-2xl">{title}</h3>
      <div className="w-full flex justify-between">
        <p className="">{data}</p>
        <span className="">{category}</span>
      </div>
      <p className="">{description}</p>
    </div>
  );
};
