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
// src/pages/HomePage/HomePage.jsx
// src/pages/HomePage/HomePage.jsx
// src/pages/HomePage/HomePage.jsx

// import React from "react";
// import Banner from "../../components/Banner/Banner";
// import ServicesList from "../../components/ServicesList/ServicesList";
// import bannerImage from "../../assets/images/camper-desktop.webp"; // убедитесь, что путь правильный

// function HomePage() {
//   return (
//     <div>
//       <Banner image={bannerImage}>
//         <h1>Your Road to Adventure!</h1>
//       </Banner>
//       <ServicesList />
//     </div>
//   );
// }

// export default HomePage;

// src/pages/HomePage/HomePage.jsx
// import React from "react";
// import Banner from "../../components/Banner/Banner";
// import ServicesList from "../../components/ServicesList/ServicesList";
// import bannerImage from "../../assets/images/camper-desktop.webp"; // убедитесь, что путь правильный

// function HomePage() {
//   return (
//     <div>
//       <Banner image={bannerImage}>
//         <h1>Your Road to Adventure!</h1>
//         <button className="button">Rent</button>
//       </Banner>
//       <ServicesList />
//     </div>
//   );
// }

// export default HomePage;
