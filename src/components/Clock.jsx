import React, { useEffect, useState } from "react";
import moment from "moment";
import { Loader } from "./Loader";
export const Clock = ({ style }) => {
  const [clockState, setClockState] = useState(null);
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(moment(date, "ddd DD-MMM-YYYY, hh:mm A").format("hh:mm A"));
    }, 5000);
  }, []);
  if (!clockState) return <Loader width={20} />;
  return <div className={style}>{clockState}</div>;
};
