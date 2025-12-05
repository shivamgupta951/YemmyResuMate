import { Link } from "react-router";
import ScoreCircle from "../components/ScoreCircle";
import { useEffect, useState } from "react";
import { GiAnimalHide } from "react-icons/gi";


const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback, imagePath },
}: {
  resume: Resume;
}) => {
  const [resumeUrl, setResumeUrl] = useState(imagePath);

  return (
      <Link to={`/resume/${id}`} className="w-[47%]">
        <div className="flex border my-2 flex-row gap-2 rounded-lg justify-around min-h-[110px] max-sm:flex-col items-center max-md:justify-center max-md:items-center bg-gradient-to-b from-black to-gray-900 relative p-2">
          <div className="text-purple-800 text-xl absolute top-4 left-2 animate-bounce"><GiAnimalHide/></div>
          <div className="flex flex-col justify-center items-center gap-2 w-[50%] bg-gray-800 rounded-2xl py-10 transition-all transform duration-300 ease-in-out hover:scale-105 ">
            {companyName && (
              <h2 className="font-extrabold bg-gradient-to-r bg-clip-text from-blue-700 to-orange-500 text-transparent break-words px-4 ">
                {companyName}
              </h2>
            )}
            {jobTitle && (
              <h3 className="text-lg break-words text-orange-700">{jobTitle}</h3>
            )}
            {!companyName && !jobTitle && (
              <h2 className="text-white font-bold">Resume</h2>
            )}
          <div className="flex-shrink-0 animate-slow-spin">
            <ScoreCircle score={feedback.overallScore} />
          </div>
          </div>
          {resumeUrl && (
            <div className="animate-in fade-in duration-1000">
              <div className="w-full h-full">
                <img
                  src={resumeUrl}
                  alt="resume"
                  className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
                />
              </div>
            </div>
          )}
        </div>
      </Link>
  );
};
export default ResumeCard;
