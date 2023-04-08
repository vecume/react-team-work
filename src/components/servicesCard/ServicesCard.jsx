import React from "react";

export default function ServicesCard({ services }) {
  return (
    <div key={services.id} className="services-card__container">
      <img src={services.img} alt="services" />
      <h2 className="services-card__header">{services.header}</h2>
      <p className="services-card__content">{services.content}</p>
      <div className="services-card__subservices">
        <div>
          {services.subservices.map((subservice) => (
            <p className="services-card__subservices-num">
              {subservice.number}
            </p>
            // (
            //   <h3
            //     key={subservice.number}
            //     className="services-card__subservices-content"
            //   >
            //     {subservice.content}
            //   </h3>
            // )
          ))}
          {/* {services.subservices.map((subservice) => (
            <h3
              key={subservice.number}
              className="services-card__subservices-content"
            >
              {subservice.content}
            </h3>
          ))} */}
        </div>
        {/* <div>
          <p className="services-card__subservices-num">
            {services.subservices[0].number}
          </p>
          <h3 className="services-card__subservices-content">
            {services.subservices[0].content}
          </h3>
        </div>
        <div>
          <p className="services-card__subservices-num">
            {services.subservices[1].number}
          </p>
          <h3 className="services-card__subservices-content">
            {services.subservices[1].content}
          </h3>
        </div>
        <div>
          <p className="services-card__subservices-num">
            {services.subservices[2].number}
          </p>
          <h3 className="services-card__subservices-content">
            {services.subservices[2].content}
          </h3>
        </div>
        <div>
          <p className="services-card__subservices-num">
            {services.subservices[3].number}
          </p>
          <h3 className="services-card__subservices-content">
            {services.subservices[3].content}
          </h3>
        </div> */}
      </div>
    </div>
  );
}
