import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Time from './components/time'
import Todo from './Todo'
import Favorite from './Favorite'
function App() {
  const [value, setValue] = useState("")
  const [todo, setTodo] = useState("")
  const [favorite, setFavorite] = useState([])
  
  return(
    <>
    {/* <Header/>
    <Content value = {value} setValue = {setValue} />
    <Time/> */}
    <Todo todo = {todo} setTodo = {setTodo} favorite = {favorite} setFavorite = {setFavorite}/>
    <Favorite favorite = {favorite}/>
    </>
  )
}

export default App
