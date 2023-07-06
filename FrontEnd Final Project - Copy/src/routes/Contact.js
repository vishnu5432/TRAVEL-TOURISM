import ContactFrom from "../components/ContactFrom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg="https://images.unsplash.com/photo-1523496922380-91d5afba98a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        title="Contact"
        btnClass="hide"
      />
      <ContactFrom />
      <Footer />
    </>
  );
}
export default Contact;
