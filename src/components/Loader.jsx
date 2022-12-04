import React from "react";
import { ClipLoader } from "react-spinners";

export const Loader = ({ width }) => {
  return (
    <div className="flex justify-center items-center mx-auto my-36">
      <ClipLoader size={width} color={"#000"} />
    </div>
  );
};
