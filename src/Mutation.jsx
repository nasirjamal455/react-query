import React, { useState } from 'react'

const Mutation = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  })
 const [data, setData] = useState()
  const handleChange = (e) => {
    const { value, name } = e.target
    setFormData({ ...formData, [name]: value })

  }
  console.log("formData", formData)
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: formData.title,
        body:formData.body,
        id: 4569,
        userId: 8526,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        const response = JSON.stringify(json)
        setData(response)
      })
  }
  return (
    
    <form className='p-3'>
      <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input name='title' type="text" onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Body</label>
        <input name='body' onChange={handleChange} type="text" class="form-control" id="exampleInputPassword1" placeholder="enter text" />
      </div>
      <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
    </form>
  )
}

export default Mutation