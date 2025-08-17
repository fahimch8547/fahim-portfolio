import Header from "./components/header";
import About from "./components/about";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black flex justify-center
     items-center mx-auto px-5 sm:px-10 " >
      <div className="max-w-7xl w-full">
     
    <Header/>
    <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
      <Footer/>
      </div>

    </main>
  );
}
