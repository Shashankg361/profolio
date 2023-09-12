  import Skills from "@/components/Skills";
  import ContactMe from "@/components/contact";
  import Navbar from "@/components/navBar";
  import Profile from "@/components/profile";
  import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>

      <header>

        <Navbar />

      </header>
    
      <main
        className={` min-h-screen flex-col items-center justify-between `}
      >

        <Profile />

        <Projects />

        <Skills />

      </main>
      <fotter>
          <ContactMe />
      </fotter>
    </div>
  )
}
