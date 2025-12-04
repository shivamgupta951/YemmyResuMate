import { Link } from "react-router";
import ScoreCircle from "../components/ScoreCircle";
import { useEffect, useState } from "react";

const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback, imagePath },
}: {
  resume: Resume;
}) => {
  const [resumeUrl, setResumeUrl] = useState(imagePath);

  return (
      <Link to={`/resume/${id}`} className="w-[45%]">
        <div className="flex border my-2 flex-row gap-2 rounded-lg justify-around min-h-[110px] max-sm:flex-col items-center max-md:justify-center max-md:items-center bg-[#d3bcb1]">
          <div className="flex flex-col justify-center items-center gap-2 w-[50%] bg-gray-800 rounded-2xl py-10">
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
          <div className="flex-shrink-0">
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
