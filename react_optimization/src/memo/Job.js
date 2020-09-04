import React, { memo } from "react";

function Job(props) {
  console.log("render-job");
  return <div>Your job is {props.job}</div>;
}

export default memo(Job);
