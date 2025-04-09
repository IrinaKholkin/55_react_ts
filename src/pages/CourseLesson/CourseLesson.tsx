import { v4 } from "uuid";

import { CourseWrapperLesson, ListItem, Title } from "./styles";
import { lessonsData } from "./data";

function CourseLesson() {
  const lessons = lessonsData.map((lesson: string) => {
    return <ListItem key={v4()}>{lesson}</ListItem>;
  });

  return (
    <CourseWrapperLesson>
      <Title>React Lessons</Title>
      {lessons}
    </CourseWrapperLesson>
  );
}

export default CourseLesson;
