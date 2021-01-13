import React from "react";

const StatisticSection = () => {
  return (
    <div className="text-center">
      <div className="mt-5 mb-5">
        <h2 className="oneStopLine2">STATISTICS</h2>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div>
            <h1>103</h1>
            <h5>Total client</h5>
          </div>
        </div>
        <div className="col-md-3">
          <h1> 90 %</h1>
          <h5>Satisfaction</h5>
        </div>
        <div className="col-md-3">
          <h1> 75 %</h1>
          <h5>Return Client</h5>
        </div>
        <div className="col-md-3">
          <h1> 74 %</h1>
          <h5>Happy client</h5>
        </div>
      </div>
    </div>
  );
};

export default StatisticSection;
