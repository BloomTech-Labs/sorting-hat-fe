import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="relative h-4 w-3/4 border border-solid border-black rounded-lg m-auto">
      <div className={`bg-red-600 h-full w-${progress} border-r border-solid border-black rounded-lg duration-700 ease-in-out`} />
    </div>
  );
}
