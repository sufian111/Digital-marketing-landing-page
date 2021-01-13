import React from "react";
import ClientsSection from "../ClientsSection/ClientsSection";
import Footer from "../Footer/Footer";
import FreeConsultation from "../FreeConsultation/FreeConsultation";
import Header from "../Header/Header";
import OneStopSection from "../OneStopSection/OneStopSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import StatisticSection from "../StatisticSection/StatisticSection";
import Testimonials from "../Testimonials/Testimonials";
import WorkingProcessSection from "../WorkingProcessSection/WorkingProcessSection";

const HomePage = () => {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="container">
        <ServiceSection></ServiceSection>
        <OneStopSection></OneStopSection>
        <WorkingProcessSection></WorkingProcessSection>
        <StatisticSection></StatisticSection>
        <Testimonials></Testimonials>
        <ClientsSection></ClientsSection>
        <FreeConsultation></FreeConsultation>
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomePage;
