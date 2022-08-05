import { useEffect } from "react";
import { useState } from "react";

type ClockProps = {
  interval: number;
};

type ClockState = {
  date: Date;
};

type ClockToggleState = { toggle: boolean; interval: number };

const useInterval = ({
  interval,
  callback,
}: {
  interval: number;
  callback: () => void;
}) => {
  useEffect(() => {
    const intervalId = setInterval(() => callback(), interval);
    return () => clearInterval(intervalId);
  }, [interval, callback]);
};

export const ClockFunc = ({ interval }: ClockProps) => {
  const [date, setDate] = useState<Date>(new Date());
  useInterval({
    interval,
    callback: () => {
      setDate(new Date());
    },
  });

  return (
    <div>
      <h1>{date.toString()}</h1>
    </div>
  );
};
