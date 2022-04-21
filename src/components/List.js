import React, { useContext } from 'react'
import { myContext } from '../utils/Context'
import '../assets/css/List.css';


const List = () => {
    const context = useContext(myContext)
    const isCompleted = (todoId) => {
        context.setTodos(
            context.todos.map((item) => {
                if (item.id === todoId) {
                    return { ...item, isCompleted: !item.isCompleted };
                }
                return item;
            })
        )
    }

    return (
        <div className='listOutDiv'>
            {
                context?.todos?.map((item, index) => (
                    <div className='todoCard' key={index} onClick={() => isCompleted(item.id)} >
                        <div className='todoCheck'>
        <input type="checkbox" checked={item.isCompleted} 
                            onChange={()=>{}}
                            />
                        </div>
                        <div className='todoText'>
                            <span style={{ textDecoration: item.isCompleted ? 'line-through' : 'none', color: '#b392ac', fontWeight: 500, fontSize: 15 }}> {item.title}  </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default List