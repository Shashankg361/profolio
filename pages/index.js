  import Skills from "@/components/Skills";
import AboutMe from "@/components/about";
  import ContactMe from "@/components/contact";
  import Navbar from "@/components/navBar";
  import Profile from "@/components/profile";
  import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className = "bg-black text-white">

      <header>

        <Navbar />

      </header>
    
      <main
        className={` min-h-screen flex-col items-center justify-between `}
      >

        <Profile />

        <Projects />

        <AboutMe />

        <Skills />

      </main>
      <fotter>
          <ContactMe />
      </fotter>
    </div>
  )
}
