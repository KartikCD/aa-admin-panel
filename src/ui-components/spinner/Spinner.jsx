import * as React from "react";
import { ImSpinner8 } from "react-icons/im";
import { Size } from "./types";

export const Spinner = ({ size = Size.LARGE }) => {
  return (
    <div>
      <ImSpinner8 className={`spinner ${size}`} />
    </div>
  );
};
