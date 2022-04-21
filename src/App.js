import React, { useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import { myContext } from './utils/Context'
import DateCard from './components/DateCard'


const App = () => {
  const [todos, setTodos] = useState([])

  

  return (
    <div className='mainDiv'>
      <div className='todoMainCard'>
        <h3 style={{ textAlign: 'center', color: '#b392ac' }}>TODO LİST </h3>
        <hr style={{ border: '.5px solid lightgray' }} />
        <myContext.Provider value={{ todos, setTodos }}>
          <Form />
          <List />
        </myContext.Provider>
   
      </div>
      <DateCard />
    </div>
  )
}

export default App