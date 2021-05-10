import React from "react";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Home/Banner";
import Body from "../../Components/Home/Body";
import ResponsibeContainer from "../../Components/NavBar/ResponsibeContainer";

const HomepageLayout = () => (
  <ResponsibeContainer>
    <Banner />
    <Body />
    <Footer />
  </ResponsibeContainer>
);

export default HomepageLayout;
