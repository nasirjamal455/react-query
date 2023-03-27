import { useMutation } from 'react-query'
import axios from 'axios'
function Mutation() {
    const mutation = useMutation(newTodo => {
      return axios.post("https://jsonplaceholder.typicode.com/posts", newTodo)
    })
  
    return (
      <div>
        {mutation.isLoading ? (
          'Adding todo...'
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}
  
            {mutation.isSuccess ? <div>Todo added!</div> : null}
  
  
            <button
              onClick={() => {
                mutation.mutate({ id: new Date(), title: 'Do Laundry' })
              }}
            >
              Create Todo
            </button>
          </>
        )}
      </div>
    )
  }
  export default Mutation