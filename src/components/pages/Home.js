import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HomeSection from "../HomeSection";
import Footer from "../Footer";
import ContactForm from "../ContactForm";

function Home() {
  return (
    <>
      <HomeSection />
      <Cards />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
