import React from "react";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import GalleryPreview from "../components/gallery-overview/GalleryPreview";
import Header from "../../src/components/header/Header";

function Home() {
  return (
    <>
      <Header />
      <About />
      <GalleryPreview />
      {/* <Footer/> */}
    </>
  );
}

export default Home;
