import React, { useContext, useState } from 'react'
import { myContext } from '../utils/Context';
import '../assets/css/Form.css';

 

const Form = () => {
    const context = useContext(myContext)
    const [title, setTitle] = useState("");
    const [id, setId] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();
        title !== ""&& context.setTodos([...context.todos, { id: id + 1, title: title, isCompleted: false }])
        setTitle("")
        setId(id + 1)
    }

    const clearCompleted = () => {

        const newTodoList = context.todos.filter((item) => !item.isCompleted)
        context.setTodos(newTodoList)
      }

    return (
        <form className='submitForm' onSubmit={handleSubmit}>
            <input
            className='todoInput'
                type="text"
                value={title}
                onInput={(e) => setTitle(e.target.value)}
            />
            <button className='submitButton' type="submit" > Ekle</button>
            <button onClick={() => clearCompleted()} className='deleteButton' type="submit" > Temizle</button>


        </form>
    )
}

export default Form


