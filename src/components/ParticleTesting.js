import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
//https://www.npmjs.com/package/react-particles-js
const particleOpt = {
  //   polygon: {
  //     enable: true,
  //     type: "inside",
  //     move: {
  //       radius: 10
  //     },
  //     url: "path/to/svg.svg"
  //   }
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

function ParticleTesting() {
  return (
    <div className="bg-blue-900 h-auto">
      <Particles params={particleOpt}>
        <p className="text-xl">WORDS </p>
      </Particles>
    </div>
  );
}
export default ParticleTesting;
// export default connect(null, {})(Landing);
