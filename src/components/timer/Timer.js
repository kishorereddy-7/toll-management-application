import { useEffect, useState } from "react";
import { dayNames } from "../commonFuntions/time";

const Timer = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="col-sm-12 col-md-4">
      <div
        className="d-flex justify-content-end align-items-center"
        style={{ textAlign: "right" }}
      >
        <h6 className="p-1">{date.toLocaleDateString("en-US")}</h6>
        <h6 className="p-1">{dayNames[date.getDay()]}</h6>
        <h6 className="p-1">{date.toLocaleTimeString("en-US")}</h6>
      </div>
    </div>
  );
};

export default Timer;
