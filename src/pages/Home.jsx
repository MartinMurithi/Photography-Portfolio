import React from "react";
import About from "../components/about/About";
import GalleryPreview from "../components/gallery-preview/GalleryPreview";
import Header from "../../src/components/header/Header";

function Home() {
  return (
    <>
      <Header />
      <About />
      <GalleryPreview />
    </>
  );
}

export default Home;
