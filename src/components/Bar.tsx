import { motion } from "framer-motion";
const Bar = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center items-center w-full bg-purple-800">
        <motion.div
          initial={{ x: "-180%" }}
          animate={{ x: "180%" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="w-[20%] border border-red-800"
        ></motion.div>
      </div>

      <div className="bg-gradient-to-r font-bold from-red-700 to-blue-500 mb-10 h-8 opacity-60 flex justify-center items-center w-[90%] text-[50%] px-8 md:px-4 rounded-md md:text-[80%] md:w-[70%] lg:w-[60%]">
        <div className="md:w-[85%] lg:w-[65%] text-center text-white bg-black py-1 rounded-2xl">
          Welcome to the YemmyResuMate🐼!
        </div>
      </div>
    </div>
  );
};

export default Bar;
