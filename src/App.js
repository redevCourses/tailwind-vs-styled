import TodoList from './TodoList'
import TodoListSC from './TodoListStyled'

function App () {
  return (
    <>
      <div className='bg-gray-100 flex justify-center items-center'>
        <TodoList />
      </div>
      <div className='bg-green-100 flex justify-center items-center'>
        <TodoListSC />
      </div>
    </>
  )
}

export default App
