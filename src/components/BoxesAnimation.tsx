import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const BoxesAnimation = () => {
  const [boxStatus, setBoxStatus] = useState(() => {
    return Math.floor(Math.random() * 10);
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setBoxStatus(Math.floor(Math.random() * 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{ rotate: [0, 15, -15, 30, -30, 60, -60, 120, -120, 360] }}
      transition={{ duration: 20, repeat: Infinity }}
      className="border w-[35%] justify-between flex flex-wrap p-4 rounded-xl bg-gradient-to-br from-[#020727] via-black to-green-950 min-h-[370px]"
    >
      <div
        className={`border size-[105px] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
          boxStatus == 0 ? "animate-ping-slow" : ""
        }`}
      ></div>

      <div
        className={`border size-[105px] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
          boxStatus == 1 ? "animate-ping-slow" : ""
        }`}
      ></div>

      <div
        className={`border size-[105px] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
          boxStatus == 2 ? "animate-ping-slow" : ""
        }`}
      ></div>

      <div
        className={`border size-[105px] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
          boxStatus == 3 ? "animate-ping-slow" : ""
        }`}
      ></div>

      <div
        className={`border size-[105px] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
          boxStatus == 4 ? "animate-ping-slow" : ""
        }`}
      ></div>

      <div
        className={`border size-[105px] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
          boxStatus == 5 ? "animate-ping-slow" : ""
        }`}
      ></div>

      <div
        className={`border size-[105px] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
          boxStatus == 6 ? "animate-ping-slow" : ""
        }`}
      ></div>

      <div
        className={`border size-[105px] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
          boxStatus == 7 ? "animate-ping-slow" : ""
        }`}
      ></div>

      <div
        className={`border size-[105px] flex justify-center items-center text-black rounded-md bg-[#decdcd] mt-2 ${
          boxStatus == 8 ? "animate-ping-slow" : ""
        } ${boxStatus == 9 ? "animate-ping-slow" : ""}`}
      ></div>
    </motion.div>
  );
};

export default BoxesAnimation;
