import { gql, useQuery} from '@apollo/client'

const GET_LESSON_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{lessons : Lesson[]}>(GET_LESSON_QUERY)
  console.log("🚀 ~ file: App.tsx ~ line 18 ~ App ~ data", data)
  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
