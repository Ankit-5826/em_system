import React from "react";

function NumbersInfo() {
  return (
    <>
      <div className="bg-red-300 h-55 mt-5 w-screen p-5 flex justify-between gap-2">
        <div className="bg-amber-800 w-110 rounded-2xl p-5 flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl p-1">1 </h1>
            <h1  className="text-3xl">New Task</h1>
        </div>
        <div className="bg-pink-800 w-110 rounded-2xl p-5 flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl p-1">1 </h1>
            <h1  className="text-3xl">New Task</h1>
        </div>
        <div className="bg-green-800 w-110 rounded-2xl p-5 flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl p-1">1 </h1>
            <h1  className="text-3xl">New Task</h1>
        </div>
        <div className="bg-blue-800 w-110 rounded-2xl p-5 flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl p-1">1 </h1>
            <h1  className="text-3xl">New Task</h1>
        </div>
      </div>
    </>
  );
}

export default NumbersInfo;
