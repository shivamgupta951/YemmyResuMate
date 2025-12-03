import React from "react";
import { motion} from 'motion/react';
const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#230303] via-black to-black bg-cover text-white flex items-center justify-start relative py-12 flex-col">
      <section className="outline outline-6 outline-red-500 bg-black shadow-lg shadow-yellow-800 px-10 py-4 rounded-3xl flex justify-center items-center flex-col animate-pulse">
        <motion.h1 className="text-4xl tracking-wider font-serif font-bold relative z-10 flex justify-center items-center bg-gradient-to-r from-yellow-800 via-yellow-700 to-blue-600 bg-clip-text text-transparent">Track Your Applications</motion.h1>
        <h1 className="text-3xl tracking-wider font-serif font-bold relative z-10 flex justify-center items-center bg-gradient-to-r from-yellow-600 via-red-600 to-blue-600 bg-clip-text text-transparent">& Resume Ratings</h1>
      </section>
      <h3 className="my-20 text-3xl bg-gradient-to-r from-purple-500 to-red-700 font-thin bg-clip-text text-transparent">Review your submissions and check AI Powered feedback</h3>
    </main>
  );
};

export default Home;
