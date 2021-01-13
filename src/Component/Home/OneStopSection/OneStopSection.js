import React from "react";

const OneStopSection = () => {
  const data = [
    {
      id: 1,
      title: "Professional Team",
      detail: "Our experts having a decade of experience. We know, what we do!",
      icon: "fab fa-teamspeak",
    },
    {
      id: 2,
      title: "Hard working",
      detail:
        "We are super-active group of people and we finish your project in time!",
      icon: "fas fa-check",
    },
    {
      id: 1,
      title: "24/7 availability",
      detail:
        "We are always available to listen to your concern & we act ASAP!",
      icon: "fas fa-calendar-alt",
    },
  ];
  return (
    <div className="text-center mt-5 oneStepBg pb-2">
      <div className="text-center ">
        <p className="oneStopLine1 mb-4 pt-4">Why choose us</p>
        <h1 className="oneStopLine2 mb-2">
          One Stop Digital Marketing Solution
        </h1>
      </div>
      <div>
        <div className="row m-5">
          {data.map((data) => (
            <SingleData data={data}></SingleData>
          ))}
        </div>
      </div>
    </div>
  );
};

const SingleData = ({ data }) => {
  const { title, detail, icon } = data;
  return (
    <div className="col-md-4 boxShadow">
      <div className="boxForSingleData p-2">
        <i
          style={{ fontSize: 40, paddingBottom: "15px" }}
          aria-hidden="true"
          class={icon}
        ></i>
        <p className="title">{title} </p>
        <p>{detail} </p>
      </div>
    </div>
  );
};

export default OneStopSection;
