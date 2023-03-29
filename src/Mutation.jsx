// import React, { useState } from 'react'

// const Mutation = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     body: ""
//   })
//  const [data, setData] = useState()
//   const handleChange = (e) => {
//     const { value, name } = e.target
//     setFormData({ ...formData, [name]: value })

//   }
//   console.log("formData", formData)
//   const handleSubmit = (e) => {
//     e.preventDefault()

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       body: JSON.stringify({
//         title: formData.title,
//         body:formData.body,
//         id: 4569,
//         userId: 8526,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     })
//       .then(response => response.json())
//       .then(json => {
//         const response = JSON.stringify(json)
//         setData(response)
//       })
//   }
//   return (
    
//     <form className='p-3'>
//       <div class="form-group">
//         <label for="exampleInputEmail1">Title</label>
//         <input name='title' type="text" onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" />
//       </div>
//       <div class="form-group">
//         <label for="exampleInputPassword1">Body</label>
//         <input name='body' onChange={handleChange} type="text" class="form-control" id="exampleInputPassword1" placeholder="enter text" />
//       </div>
//       <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
//     </form>
//   )
// }

// export default Mutation
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

  // Access the client
  const queryClient = useQueryClient()

  const getTodos = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
   setData(data)
  }
  // Queries
  const query= useQuery('todos', getTodos)

  // Mutations
  // const mutation = useMutation("https://jsonplaceholder.typicode.com/posts", {
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries('todos')
  //   },
  // })

  const mutation = useMutation({
    mutationFn: (newTodo) => {
      const newData = axios.post('https://jsonplaceholder.typicode.com/posts', newTodo, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries('todos')
        },
      })
     
      console.log("mutation", newData.then((res)=> setData([...Data ,res.data])))
    },
  })

    // return response.json();
  // });
console.log("queries", Data)
  return (
    <div>
      <ul>
        {Data?.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          })
        }}
      >
        Add Todo
      </button>
    </div>
  )
}
 
export default Mutation