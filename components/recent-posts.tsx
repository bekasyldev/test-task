import Link from "next/link";
import { PostCard } from "./post-card";

const posts = [
  {
    id: 1,
    title: "Making a design system from scratch",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    data: "12 Feb 2020",
    category: "Design, Pattern",
  },
  {
    id: 2,
    title: "Creating pixel perfect icons in Figma",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    data: "12 Feb 2020",
    category: "Figma, Icon Design",
  },
];

export const RecentPosts = () => {
  return (
    <section className="h-[396px] w-full bg-[#edf7fa] pt-4 pb-2 px-56">
      <div className="w-full flex flex-col items-center justify-between space-y-4">
        <div className="w-full flex justify-between">
          <p className="text-lg">Recent posts</p>
          <Link href={"/posts"} className="text-[#00A8CC]">
            View all
          </Link>
        </div>
        <div className="w-full flex justify-between">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              description={post.description}
              data={post.data}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
