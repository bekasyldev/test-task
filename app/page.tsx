import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { RecentPosts } from "@/components/recent-posts";
import { Works } from "@/components/works";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPosts />
      <Works />
      <Footer />
    </>
  );
}
