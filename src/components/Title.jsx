import React from "react";

function Title({ text1, text2 }) {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-slate-500">
        {text1} <span className="text-slate-700 font-medium">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-slate-700"></p>
    </div>
  );
}

export default Title;
