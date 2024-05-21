// src/pages/HomePage/HomePage.jsx
import Banner from "../../components/Banner/Banner";
import camper from "../../assets/images/camper-desktop.webp";
import PrimaryButton from "../../components/Links/PrimaryLink/PrimaryLink";
import PageTitle from "../../components/Typography/PageTitle/PageTitle";
import ServicesList from "../../components/ServicesList/ServicesList";

function HomePage() {
  return (
    <>
      <Banner image={camper}>
        <PageTitle>Start Your Journey Today!</PageTitle>
        <PrimaryButton text="Rent" />
      </Banner>
      <ServicesList />
    </>
  );
}

export default HomePage;
