import Awards from "./Awards";
import Education from "./Education";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Footer from "../Footer";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
