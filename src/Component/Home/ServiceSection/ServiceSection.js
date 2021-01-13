import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import allServices from "../../DataFile/Data";

const ServiceSection = () => {
  const [service, setService] = useState(allServices);

  return (
    <div className="mt-5 ">
      <h2 className="heading-title text-center mt-5 mb-5 mt-md-0">
        Our Digital Marketing services
      </h2>
      <div className="row text-center mt-2">
        {service.map((service) => (
          <Services service={service}></Services>
        ))}
      </div>
      <div className="text-center ">
        <a className="buttonMore" href="#">
          More
        </a>
      </div>
    </div>
  );
};

const Services = ({ service }) => {
  console.log(service);
  const { title, description } = service;
  return (
    <div className="col-md-4 p-4 mb-2">
      <div>
        <i
          style={{ fontSize: "50px", color: "#437085" }}
          class="fas fa-bullhorn mb-4"
        ></i>
        <p className="title">{title} </p>
        <p style={{ color: "#212529" }}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceSection;
