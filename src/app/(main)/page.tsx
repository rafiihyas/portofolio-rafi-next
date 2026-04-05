import About from "./components/sections/About";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden relative bg-page">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
