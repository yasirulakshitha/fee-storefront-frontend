import FeaturedGallery from "./components/FeaturedGallery";
import Footer from "./components/Footer";
import Hero from "./components/Hero"; //! ./ => Inside the same folder

import Services from "./components/Services"; //! ./ => Inside the same folder


function HomePage() {
  const name = "janith";

  return (
    <div>      
      <Hero />

      <FeaturedGallery/>
      
      <Services/>
      
    </div>
  );
}

export default HomePage;