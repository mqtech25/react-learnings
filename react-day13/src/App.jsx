import React, { use } from 'react'
import Input from './components/Input'
import { useState } from 'react'
import TextareaInput from './components/TextareaInput'
import Buttons from './components/Button'
import TodoWorkCard from './components/TodoWorkCard'

// 1 day learn folder and react flow
// 2 day learn component
// 3 day learn props(properties)
// 4 day learn mini company card project objects
// 5 day learn css module 
// 6 day learn tailwindCss install
// 7 day UI design learn (feature base folder sturcture / atomic base folder structure)
// In feature base like header, body, footer saperate component while in atomic base each and every thing have saperate component
// 8 day function call
// 9 day use hooks
// 10 day advance hook
// 11 day form handling
// 12 day two way binding in form
// 13 day note app

function App() {

  const [todo,setTodo] = useState('')
  const [todoDes, setTodoDes] = useState('')
  const [todoTask,setTodoTask] = useState([])
  const [editTodoIndex,setEditTodoIndex] =useState(null)
  const [alert, setAlertMsg] = useState(null);


  const formSubmitHandler = (e)=>{
      e.preventDefault();

      if(editTodoIndex != null){
        const updateTodoTask = [...todoTask]
        updateTodoTask[editTodoIndex] = {todo,todoDes}
        setTodoTask(updateTodoTask)
        setEditTodoIndex(null)
      setAlertMsg('todo work updated');

      }else{
      // const newTask = [...todoTask]
      // newTask.push({todo,todoDes})
      // setTodoTask(newTask)
      setTodoTask((preTask)=>{ return [...preTask,{todo,todoDes}]})
      setAlertMsg('todo work added');
      }

      setTodo('');
      setTodoDes('')
      setTimeout(() => {
        setAlertMsg(null);
      }, 3000);
      console.log(todoTask);
      console.log('form submite');
  }

  const TodoWorkCardDelete = (key)=>{
    const copyTodoTask = [...todoTask]
     copyTodoTask.splice(key,1)
    setTodoTask(copyTodoTask)
      setAlertMsg('todo work deleted');
      setTimeout(() => {
        setAlertMsg(null);
      }, 3000);
   }

   const TodoWorkCardEdit = (key)=>{
    const todoTaskEdit = todoTask[key]
      setTodo(todoTaskEdit.todo);
      setTodoDes(todoTaskEdit.todoDes);
      setEditTodoIndex(key)
      setAlertMsg(<><p><strong>Note:</strong></p><ul><li>Todo data fills inside form</li><li>Change values</li> <li>Submit form</li></ul></>)
      setTimeout(() => {
        setAlertMsg(null);
      }, 3000);
    }

  return (
   <>
  <div style={{ right: alert != null ? '0' : '-100%', display: alert != null ? 'block' : 'none' }} className="p-4 mb-4 text-sm text-fg-brand-strong rounded-base bg-white absolute top-1 rounded-l-md  z-1  transition transition-all" role="alert">
      <span class="font-medium">{alert}</span>
    </div>
    <div>
      <div className="flex flex-wrap bg-neutral-800 min-h-[100vh] h-[auto]">
        <div className="form text-white w-full lg:w-3/12 bg-sky-200 p-3 ">
            <h1 className='text-3xl text-black'>Todo</h1>
      <form onSubmit={(e)=>{
        formSubmitHandler(e)
      }}>
      <Input type="text"   placeholder="Title" value={todo} onChange={(e)=>{
                setTodo(e.target.value)
            } } required={true}/>
            <TextareaInput value={todoDes} onChange={(e)=>{
              setTodoDes(e.target.value)
            }} />
            <Buttons/>
      </form>
            
        </div>
          <div className="notes-append  w-full lg:w-9/12 bg-sky-700 p-3">
            <h1 className='text-3xl text-white'>Todo list</h1>
             <div className="todoWorkCard-wrapper flex flex-wrap">
              {
                todoTask.map((elem,key)=>{
                  return <TodoWorkCard key={key} task={elem.todo} taskDetail={elem.todoDes} onClickDelete={()=>{
                    TodoWorkCardDelete(key)
                  }} 
                  onClickEdit ={ ()=>{
                    TodoWorkCardEdit(key)
                  }}/>
                })
              }
             </div>
          </div>
      </div>
    </div> 
   </>
  )
}

export default App