import React, { useRef } from "react";

export default function ProgressBar({ progress }) {
  const color = useRef("#7A11FF");
  if (progress === 1) {
    color.current = "green-400";
  }
  return (
    <div className="flex justify-around mt-1 mb-1">
      <div
        className="relative h-1 w-full rounded-lg m-auto flex"
        style={{ background: "rgba(120, 17, 255, 0.5)" }}
      >
        <div
          className={`h-full border-r rounded-lg duration-700 ease-in-out `}
          style={{
            width: `${progress * 100}%`,
            background: `${color.current}`,
          }}
        />
      </div>
      {/* //! Percentage here */}
      {/* <span className={`m-auto text-${color.current}`}>{`${
				progress * 100
			}%`}</span> */}
    </div>
  );
}
