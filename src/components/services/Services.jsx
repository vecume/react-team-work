import React from "react";
import SecHeaderContent from "../secHeaderContent/SecHeaderContent";
import ServicesCard from "../servicesCard/ServicesCard";
import ServicesJson from "../../data/services.json";
import "./Services.scss";

export default function Services() {
  return (
    <div className="container">
      <SecHeaderContent
        headerContent="We help your business thrive"
        content="Transforming business challenges into impactful web and mobile
        solutions that people love to use every day"
      />
      <div className="services-card">
        {ServicesJson.map((services) => (
          <ServicesCard services={services} />
        ))}
      </div>
    </div>
  );
}
