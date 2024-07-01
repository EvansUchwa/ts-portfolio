import HomeAbout from "@/pageComponents/home/about";
import HomeBanner from "@/pageComponents/home/banner";
import HomeContact from "@/pageComponents/home/contact";
import HomeSkills from "@/pageComponents/home/skills";
import HomeWorks from "@/pageComponents/home/works";

export default function Home() {
  return (
    <div className="home">
      <HomeBanner />
      <HomeAbout />
      <HomeSkills />
      <HomeWorks />
      <HomeContact />
    </div>
  );
}
