import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Tech } from "./components/Tech";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Tech />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
