import React from "react";
// to fix the size.split add col-md-12 to the html tag.

function Col(props) {
  const size = props.size
    .split(" ")
    .map((size) => "col-" + size)
    .join(" ");

  return <div className={size}>{props.children}</div>;
}

export default Col;
