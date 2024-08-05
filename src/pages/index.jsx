import Allblog from "@/components/all-blog-section/allblog";
import Hero from "@/components/hero/hero";
import heroData from "@/components/hero/hero-data";
import Trending from "@/components/trending/trending";

export default function Home() {
  return (
    <main>
      {heroData.map(({ category, title, date, bgImg }) => (
        <Hero category={category} title={title} date={date} bgImg={bgImg} />
      ))}
      <Trending />
      <Allblog />
    </main>
  );
}
