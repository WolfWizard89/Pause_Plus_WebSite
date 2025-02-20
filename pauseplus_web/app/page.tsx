import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/Hero";
import AppInfo from "@/components/appInfo";
import { FaEnvelopeOpen, FaHome, FaMap, FaQuestionCircle, FaUsers } from "react-icons/fa";
import Question from "@/components/questions";
import Footer from "@/components/Footer";
import Team from "@/components/team";

export default function Home() {
  return (
    <div>
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className=" max-w-7xl w-full">
          <FloatingNav
            navItems={[
              { name: "Home", link: "#Hero", icon: <FaHome /> },
              { name: "Features", link: "#AppInfo", icon: <FaMap /> },
              { name: "Questions", link: "#Questions", icon: <FaQuestionCircle /> },
              { name: "Team", link: "#Team", icon: <FaUsers /> },
              { name: "Contact Us", link: "#Footer", icon: <FaEnvelopeOpen /> },
            ]}
          />
          <section id="Hero">
            <Hero />
          </section>
        </div>
      </div>
      <section
        id="AppInfo"
        className="bg-black-100 flex justify-center items-center"
      >
        <AppInfo />
      </section>
      <section id="Questions">
        <Question />
      </section>
      <section id="Team">
        <Team />
      </section>
      <section id="Footer">
        <Footer />
      </section>
    </div>
  );
}
