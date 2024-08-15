import Allblog from "@/components/all-blog-section/allblog";
import Hero from "@/components/hero/hero";

import Trending from "@/components/trending/trending";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trending />
      <Allblog />
    </main>
  );
}
