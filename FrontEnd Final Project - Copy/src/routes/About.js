import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg="https://images.unsplash.com/photo-1536408157291-aef6d736e2cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80"
        title="About"
        btnClass="hide"
      />
      <Aboutus />
      <Footer />
    </>
  );
}
export default About;
