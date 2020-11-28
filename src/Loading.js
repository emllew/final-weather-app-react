import React from "react";
import ReactLoading from "react-loading";

const Example = ({ type, color }) => (
  <ReactLoading
    className="loader"
    type="cubes"
    color="#fccbcb"
    height={80}
    width={80}

  />
);

export default Example;