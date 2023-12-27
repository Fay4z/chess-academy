import { FaCheck } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import {animateScroll as scroll, scroller} from "react-scroll";

function CourseDetail() {

    const courses = [
        {
            id: 1,
            courseName: "Foundation Course",
            learningOutcome: "Basic knowledge of Chess and ready to play with any adult",
            keyTopics: [
                "Fundamentals Of Chess",
                "Attack And Defence",
                "Check, Checkmate And Stalemate",
                "24 Sessions",
                "16 Assignments",
                "100 Plus Puzzles",
                "Monthly Leaderboard Score",
                "Tournaments",
                "Assessment Sessions",
                "24*7 Platform Access",
                "Regular Feedback",
                "Monthly PTM",
                "Duration : 3 Months",
            ],
        },
        {
            id: 2,
            courseName: "Level 1",
            learningOutcome: "Perform at School/District level tournaments ",
            keyTopics: [
                "An Overview Of The Opening, Middlegame, And Endgame Concepts.",
                "Typical Tactical Patterns In A Structured Manner",
                "Laws Of Exchanges",
                "48 Sessions",
                "30 Assignments",
                "250 Plus Puzzles",
                "Monthly Leaderboard Score",
                "4 Tournaments",
                "Assessment Sessions",
                "24*7 Platform Access",
                "Regular Feedback",
                "Monthly PTM",
                "Duration : 6 Months",
            ]
        },
        {
            id: 3,
            courseName: "Level 2",
            learningOutcome: "Perform at State-level tournaments",
            keyTopics: [
                "Basic Opening Theory",
                "Basic Middle Game Strategy",
                "Advance Pawn Endgame",
                "48 Sessions",
                "25 Assignments",
                "250 Plus Puzzles",
                "Monthly Leaderboard Score",
                "4 Tournaments",
                "Assessment Sessions",
                "24*7 Platform Access",
                "Master Class With Grandmaster",
                "Regular Feedback",
                "Monthly PTM",
                "Duration : 6 Months",
            ]
        },
        {
            id: 4,
            courseName: "Level 3",
            learningOutcome: "Perform at National-level tournaments",
            keyTopics: [
                "Advance Tactical Patterns",
                "Coordination And Mobilisation",
                "Advance Attacking Patterns",
                "48 Sessions",
                "25 Assignments",
                "250 Plus Puzzles",
                "Monthly Leaderboard Score",
                "4 Tournaments",
                "Assessment Sessions",
                "24*7 Platform Access",
                "Master Class With Grandmaster",
                "Regular Feedback",
                "Monthly PTM",
                "Duration : 6 Months",
            ]
        },
        {
            id: 5,
            courseName: "FIDE Rating Course",
            learningOutcome: "Become a FIDE rated player",
            keyTopics: [
                "Key Topics",
                "Opening Repertoire",
                "Minor Pieces Endgame",
                "Evaluation Of Position",
                "48 Sessions",
                "25 Assignments",
                "250 Plus Puzzles",
                "Monthly Leaderboard Score",
                "4 Tournaments",
                "Assessment Sessions",
                "24*7 Platform Access",
                "Master Class With Grandmaster",
                "Regular Feedback",
                "Monthly PTM",
                "Duration : 6 Months",
            ]
        }
    ]

    const navigate = useNavigate();

    const handleContactSection = async () => {
        await navigate("/");
        await scroller.scrollTo('contactSection', {
            duration: 1500,
            delay: 100,
            smooth: 'easeInOutQuint',
            // ... other options
          });
    }
    
    
   
    return ( 
        <div className="mx-10">
            <div className="max-w-5xl m-auto space-y-4">
                <h1 className="text-5xl font-extrabold text-center py-10">Explore Courses</h1>
                <p className="text-xl text-center pb-6">We offer various CHESS courses for students. Choose the best Course that suites you.
                Not sure what to select or have doubts 
                <span 
                    className="text-blue-600 cursor-pointer underline" 
                    onClick={handleContactSection}> Contact us
                </span></p>
            </div>
            <div className=" max-w-5xl m-auto my-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {courses.map(course => (
                    <div className=" border border-gray-300 p-7 rounded-md bg-gradient-to-r from-violet-200 to-indigo-200 text-text" key={course.id}>
                        <h1 className="text-3xl sm:text-4xl mb-4 pb-3 border-b-2 text-center font-bold">{course.courseName}</h1>
                        <div className="space-y-2 pb-3 border-b-2">
                            <h3 className="text-2xl font-semibold">Learning Outcome</h3>
                            <p className="text-base">{course.learningOutcome}</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold">Key Topics</h3>
                            <div className="pl-10">

                                {course.keyTopics.map(topic => (
                                    <div className="flex py-2 text-base items-center">
                                        <FaCheck className="w-6 h-6 text-accent mr-4"/>
                                        <p className="text-base">{topic}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className=" text-center pb-2 pt-4">
                            <button className="btn bg-accent text-white text-xl hover:bg-purple-600" onClick={handleContactSection}>Enroll Now</button>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
     );
}

export default CourseDetail;