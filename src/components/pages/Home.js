import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HomeSection from "../HomeSection";
import Footer from "../Footer";
import ContactForm from "../ContactForm";

function Home() {
  return (
    <>
      <HomeSection
        src1="/videos/PlexusBg.mov"
        h1="Bradley Smith"
        p="Full-stack developer"
      />
      <Cards />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
