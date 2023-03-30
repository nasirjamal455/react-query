
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import axios from 'axios';
import React from 'react';
function Mutation() {
  const [Data, setData] = React.useState([])
  const [formData, setFormData] = React.useState({
    id:112,
    title:"",
    body:""

  })

  // Access the client
  const queryClient = useQueryClient()



  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post('https://jsonplaceholder.typicode.com/posts', newTodo, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries('todos')
        },
      })

    },
  })
const changeHandler = (e)=>{
  const {value, name}= e.target
  setFormData({...formData, [name]:value})

}
  return (
    <div>

      <div class="container">
        <form>
          <label for="email2" class="mb-2 mr-sm-2">Title</label>
          <input onChange={changeHandler} type="text" class="form-control mb-2 mr-sm-2" id="email2" placeholder="title" name="title" />
          <label for="pwd2" class="mb-2 mr-sm-2">Body</label>
          <input  onChange={changeHandler} type="text" class="form-control mb-2 mr-sm-2" id="pwd2" placeholder="Body field" name="body" />
          <button onClick={()=>mutation.mutate(formData)} type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
      </div>
      {/* <button
            onClick={() => {
              mutation.mutate({
                id: Date.now(),
                title: 'Do Laundry',
              })
            }}
          >
            Add Todo
          </button> */}
    </div>
  )
}

export default Mutation