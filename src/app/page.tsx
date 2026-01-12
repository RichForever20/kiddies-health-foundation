import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import ImpactGallery from "../components/ImpactGallery";
import Donate from "../components/Donate";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ApplicationForm from "../components/ApplicationForm";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <ImpactGallery />
      <Donate />
      {/* <ApplicationForm /> */}
      <ContactForm />
      <Footer />

    </>
  );
}
