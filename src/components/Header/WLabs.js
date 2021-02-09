import React from "react";

const WLabs = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="-10 0 50 150"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Walmart Labs"}</title>
      <path
        d="M39.3,30.1H17.6L25.4,0h-16L0.3,35c-1.4,5.3,1.9,9.6,7.2,9.6h9.9l-6.4,24.5
	c-0.1,0.3,0.3,0.5,0.5,0.3l28.3-38C40.2,30.8,39.9,30.1,39.3,30.1z"
        // fill="#063855"
        fillRule="evenodd"
      />
    </svg>
  );
};
export default WLabs;
