import { BackLink, CourseWrapper, Title, TopicItem, TopicList } from "./styles";

function Course() {
    const topics = [
        "React: Props",
        "React: Components",
        "React: Map method for component",
        "React: Object Types for components",
        "React: Children",
        "React: Styling Components",
        "React: re-rendering of components",
        "React: axios",
        "React: Formik/Yup"
    ];
  return (
    <CourseWrapper>
      <Title>React Lessons
      </Title>
      <TopicList>
        {topics.map((topic, index) => (<TopicItem key={index}>{topic}</TopicItem>))}
      </TopicList>
      <BackLink to="/">Back to Home</BackLink>
    </CourseWrapper>
  )
}
export default Course;