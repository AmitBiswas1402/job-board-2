import Navbar from "@/components/Navbar"
import HeroBlock from "@/components/Hero"
import TechStacks from "@/components/TechStacks"
import Projects from "@/components/Projects"

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Animated background grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" /> */}
      <HeroBlock />
      <TechStacks />
      <Projects />
    </div>
  )
}
export default Home