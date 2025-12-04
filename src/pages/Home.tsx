import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import BoxesAnimation from "../components/BoxesAnimation";
import Bar from "../components/Bar";
import { resumes } from "../constants";
import ResumeCard from "../components/ResumeCard";
const Home = () => {
  return (
    <>
      <main className="min-h-[1000px] bg-gradient-to-r from-[#230303] via-black to-black bg-cover text-white flex items-center justify-start relative py-6 flex-col">
        <Bar />
        <Navbar />

        <section className="outline outline-6 outline-red-500 bg-black shadow-lg shadow-yellow-800 px-10 py-4 rounded-3xl flex justify-center items-center flex-col animate-pulse text-center">
          <motion.h1 className="text-4xl tracking-wider font-serif font-bold relative z-10 flex justify-center items-center bg-gradient-to-r from-yellow-800 via-yellow-700 to-blue-600 bg-clip-text text-transparent">
            Track Your Applications
          </motion.h1>
          <h1 className="text-3xl tracking-wider font-serif font-bold relative z-10 flex justify-center items-center bg-gradient-to-r from-yellow-600 via-red-600 to-blue-600 bg-clip-text text-transparent">
            & Resume Ratings
          </h1>
        </section>
        <h3 className="text-2xl text-center my-20 md:text-3xl flex justify-center items-center bg-gradient-to-r from-purple-500 to-red-700 font-thin bg-clip-text text-transparent">
          Review your submissions and check AI Powered feedback!
        </h3>
        <div className="w-[80%]">
          {resumes.length > 0 && (
            <div className="my-2 border flex flex-wrap justify-around items-center">
              {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume} />
              ))}
            </div>
          )}
        </div>
        <div className="border w-[70%] min-h-[500px] flex justify-center items-center">
          <BoxesAnimation />
        </div>
      </main>
    </>
  );
};

export default Home;
