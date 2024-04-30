"use client"

import {useState} from "react";

function SetTimeField({changeTime, children}: any) {
  const [time, setTime] = useState<number>()

  return (
    <div className="flex items-center flex-row gap-4">
      <div className="rounded-md bg-slate-700 text-slate-300 flex flex-row items-center p-1 gap-1">
        <input type="text"
               onChange={(e) => {
                 setTime(Number(e.target.value))
               }}
               className="text-2xl rounded-md bg-slate-700 text-slate-300 outline-none p-1 w-24 text-center mr-2"/>
        <button onClick={() => {
          changeTime(time)
        }} className="text-xl bg-blue-500 p-0.5 rounded-md">⏰
        </button>
      </div>
      <p className="text-2xl">{children}s</p>
    </div>
  );
}

export default SetTimeField;