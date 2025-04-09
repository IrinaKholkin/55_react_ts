import { v4 } from "uuid";
import {  CourseWrapper, Title, TopicItem} from "./styles";
import { lessonsData } from "./data";

function Course() {
    const lessons = lessonsData.map((lesson: string) => {
        return <TopicItem key={v4()}>{lesson}</TopicItem>;
      });
    
  return (
    <CourseWrapper>
      <Title>React Lessons
      </Title>
      {lessons}
      {/* <BackLink to="/">Back to Home</BackLink> */}
    </CourseWrapper>
  )
}
export default Course;