import { useState } from 'react'
import Favorite from './Favorite'
    
    const Todo = ({todo, setTodo, favorite, setFavorite}) =>
    
    {
    const [todos, SetTodos] = useState([])
    const [id, setId] = useState(0)
    const CreateEl = () =>
    {
        const newId = id + 1
        setId(newId)
      SetTodos([...todos, {name: todo, id: newId }])
    }  
    const DeleteEl = (id) =>
    {
        SetTodos(todos.filter((item) => item.id !== id))
        setFavorite(favorite.filter((fav) => fav.id !== id))
    }
    const toggleFav = (id) => 
    {
        const item = todos.find((el) => el.id === id)
        if (!item) return
        if (favorite.find((fav) => fav.id === id)) 
        {
        setFavorite(favorite.filter((fav) => fav.id !== id))
        }
         else 
        {
      setFavorite([...favorite, item])
    }
    }


        return(
            <>
            <p>Введите значение</p>
            <input value = {todo} onChange={(e) => setTodo(e.target.value)} className="content__input"/>
            <button onClick={CreateEl}>Создать</button>
            {todos.map(item => 
            <div>
            <h2>{item.id}. {item.name}</h2>
            <button onClick={() => DeleteEl(item.id)}>Удалить</button>
            <button onClick={() => toggleFav(item.id)}>{favorite.find(fav => fav.id === item.id) ? "Удалить из избранного": "Добавить в избранное" }</button>
            </div>
            )}
            </>
        )   
    }
    export default Todo

