import React from "react";
import SecHeaderContent from "../secHeaderContent/SecHeaderContent";
import ServisecCard from "../servisecCard/ServisecCard";
import ServisecJson from "../data/servises.json";
import "./Services.scss";

export default function Services() {
  return (
    <div className="container">
      <SecHeaderContent
        headerContent="We help your business thrive"
        content="Transforming business challenges into impactful web and mobile
        solutions that people love to use every day"
      />
      <div className="servisecCard">
        {ServisecJson.map((services) => (
          <ServisecCard servisec={services} arrNumber="0" />
        ))}
        {ServisecJson.map((services) => (
          <ServisecCard servisec={services} arrNumber="1" />
        ))}
        {ServisecJson.map((services) => (
          <ServisecCard servisec={services} arrNumber="2" />
        ))}
        {ServisecJson.map((services) => (
          <ServisecCard servisec={services} arrNumber="3" />
        ))}
        {ServisecJson.map((services) => (
          <ServisecCard servisec={services} arrNumber="4" />
        ))}
        {ServisecJson.map((services) => (
          <ServisecCard servisec={services} arrNumber="5" />
        ))}
      </div>
    </div>
  );
}
