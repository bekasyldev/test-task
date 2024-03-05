import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { RecentPosts } from "@/components/recent-posts";
import { Works } from "@/components/works";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RecentPosts />
      <Works />
      <Footer />
    </>
  );
}
