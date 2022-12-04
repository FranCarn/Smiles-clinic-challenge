import React, { useEffect, useState } from "react";
import moment from "moment";
export const Clock = ({ style }) => {
  const [clockState, setClockState] = useState(null);
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(moment(date, "ddd DD-MMM-YYYY, hh:mm A").format("hh:mm A"));
    }, 5000);
  }, []);

  return <div className={style}>{clockState}</div>;
};
