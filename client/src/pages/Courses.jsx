import CourseDetail from "../components/CourseDetail";
import { Seo } from "./Seo";

function Courses() {
  return (
    <div>
      <Seo
        title="Abbas Chess Academy | Courses"
        description="Abbas Chess Academy the best chess academy in Tamil Nadu,our academy created many International FIDE Rated players and WORLD Youth participant around the world and check out our flexible Chess courses on both online or offline"
        type="Chess Academy"
        name="Abbas Chess Academy"
      />
      <CourseDetail />
    </div>
  );
}

export default Courses;
