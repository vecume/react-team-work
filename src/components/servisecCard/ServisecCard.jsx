import React from "react";

export default function ServisecCard({ servisec, arrNumber = 0 }) {
  return (
    <div className="servisecCard__container">
      <img src={servisec.results[arrNumber].img} alt="servisec" />
      <h2 className="servisecCard__header">
        {servisec.results[arrNumber].header}
      </h2>
      <p className="servisecCard__content">
        {servisec.results[arrNumber].content}
      </p>
      <div className="servisecCard__subservices">
        <div>
          <p className="servisecCard__subservicesNum">
            {servisec.results[arrNumber].subservices[0].number}
          </p>
          <h3 className="servisecCard__subservicesContent">
            {servisec.results[arrNumber].subservices[0].content}
          </h3>
        </div>
        <div>
          <p className="servisecCard__subservicesNum">
            {servisec.results[arrNumber].subservices[1].number}
          </p>
          <h3 className="servisecCard__subservicesContent">
            {servisec.results[arrNumber].subservices[1].content}
          </h3>
        </div>
        <div>
          <p className="servisecCard__subservicesNum">
            {servisec.results[arrNumber].subservices[2].number}
          </p>
          <h3 className="servisecCard__subservicesContent">
            {servisec.results[arrNumber].subservices[2].content}
          </h3>
        </div>
        <div>
          <p className="servisecCard__subservicesNum">
            {servisec.results[arrNumber].subservices[3].number}
          </p>
          <h3 className="servisecCard__subservicesContent">
            {servisec.results[arrNumber].subservices[3].content}
          </h3>
        </div>
      </div>
    </div>
  );
}
