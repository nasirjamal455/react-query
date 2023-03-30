import { useQuery } from 'react-query'
import axios from "axios"
import { QueryClient, QueryClientProvider } from "react-query"

export default function Todos() {
const queryClient = new QueryClient()

  const getTodos = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data
  }
  const { isLoading, isError, data, error } = useQuery(["todos"], getTodos)
  if (isLoading) {
    return <span>Loading...</span>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }
  console.log("todos list", data)
  return (
   
      <ul>
        {data?.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
  )
}