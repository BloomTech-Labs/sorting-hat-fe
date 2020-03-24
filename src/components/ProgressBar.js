import React from "react";

export default function ProgressBar({ progress }) {
  const filler = `bg-red-600 h-full w-${progress} border-r border-solid border-black rounded-lg`;

  return (
    <div className="relative h-4 w-3/4 border border-solid border-black rounded-lg m-auto">
      <div className={filler} />
    </div>
  );
}
