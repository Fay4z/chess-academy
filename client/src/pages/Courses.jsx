import CourseDetail from "../components/CourseDetail";
import { Seo } from "./Seo";

function Courses() {
  return (
    <div>
      <Seo
        title="Abbas Chess Academy | Courses"
        description="Check out our flexible Chess courses on both online or offline"
        type="Chess Academy"
        name="Abbas Chess Academy"
      />
      <CourseDetail />
    </div>
  );
}

export default Courses;
