import { useNavigate } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import IMAGES from "../images/Images";

function CourseDetail() {
  const courses = [
    {
      id: 1,
      chessPeice: IMAGES.chesspawn,
      courseName: "Beginner Level:",
      learningOutcome:
        "Basic knowledge of Chess and ready to play with any adult",
      keyTopics: [
        "Introduction to the Game of Chess",
        "Chessboard &amp; Chessmen",
        "Rules for Moving &amp; Capturing",
        "Chess Notations",
        "Special Chess Moves in Castling &amp; En-Passant",
        "Different Between Check and Checkmate",
        "Principles to get the King out of Check",
        "Model Games",
        "After Completion of Level 1 Pawn Certificate and Medal will be awarded",
      ],
    },
    {
      id: 2,
      chessPeice: IMAGES.chessrook,
      courseName: "Intermediate Level:",
      learningOutcome: "Perform at School/District level tournaments ",
      keyTopics: [
        "Revision of Level -1 Course",
        "Elementary Checkmate with Two Rooks",
        "Elementary Checkmates with a Queen",
        "Checkmate in 1 Move , Simple Checkmate in Two moves",
        "Development of Pieces regarding Opening Basis",
        "Basics of Opening Strategy",
        "Common Checkmating Ideas",
        "COURSE DURATION: 24-hours",
        "NO OF SESSIONS: 24 Sessions over 3-Months",
      ],
    },
    {
      id: 3,
      chessPeice: IMAGES.chessqueen,
      courseName: "Advanced Level:",
      learningOutcome: "Perform at State-level tournaments",
      keyTopics: [
        "Introduction About level 1 and level 2",
        "Checkmate with 1 Rook",
        "Checkmate with Double Bishops",
        "Checkmate with Bishop+ Knight",
        "Introduction to Chess Tactics",
        "Pin",
        "Knight Fork",
        "Double Attack",
        "Skewer Attack",
        "Back Rank",
        "Discovered Attack",
        "Discovered Check",
        "Destroying the Defender",
        "Model Games to Get an Idea about to play",
        "COURSE DURATION: 40-hours",
        "NO OF SESSIONS: 40 Sessions over 5-Months",
      ],
    },
  ];

  const navigate = useNavigate();

  const handleContactSection = async () => {
    await navigate("/");
    await scroller.scrollTo("contactSection", {
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      // ... other options
    });
  };

  return (
    <div className="mx-10">
      <div className="max-w-5xl m-auto space-y-4">
        <h1 className="text-5xl font-extrabold text-center py-10">
          Explore Courses
        </h1>
        <p className="text-xl text-center pb-6">
          We offer various CHESS courses for students. Choose the best Course
          that suites you. Not sure what to select or have doubts
          <span
            className="text-blue-600 cursor-pointer underline"
            onClick={handleContactSection}
          >
            {" "}
            Contact us
          </span>
        </p>
      </div>
      <div className=" max-w-5xl m-auto my-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <div
            className=" border border-gray-300 p-7 rounded-md bg-gradient-to-r from-violet-200 to-indigo-200 text-text"
            key={course.id}
          >
            <img
              src={course.chessPeice}
              alt={course.courseName}
              className=" mb-6 w-2/3 relative left-16"
            />
            <h1 className="text-3xl sm:text-4xl mb-4 pb-3 border-b-2 text-center font-bold">
              {course.courseName}
            </h1>
            <div className="space-y-2 pb-3 border-b-2">
              <h3 className="text-2xl font-semibold">Learning Outcome</h3>
              <p className="text-base">{course.learningOutcome}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-semibold">Key Topics</h3>
              <div className="pl-10">
                {course.keyTopics.map((topic) => (
                  <ul className=" list-disc text-accent">
                    <div className="flex py-2 text-base items-center">
                      {/* <FaCheck className="w-6 h-6 text-accent mr-4"/> */}

                      <li className="">
                        <p className="text-base text-text">{topic}</p>
                      </li>
                    </div>
                  </ul>
                ))}
              </div>
            </div>
            <div className=" text-center pb-2 pt-4">
              <button
                className="btn bg-accent text-white text-xl hover:bg-purple-600"
                onClick={handleContactSection}
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetail;
