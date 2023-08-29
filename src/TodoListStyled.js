import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  margin-top: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const Input = styled.input`
  flex-grow: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  outline: none;
`

const Button = styled.button`
  background-color: #3490dc;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2779bd;
  }
`

const Task = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  margin-bottom: 8px;
`

const RemoveButton = styled.button`
  color: #e53e3e;
  background: none;
  border: none;
  cursor: pointer;
`

function TodoList () {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }

  const removeTask = index => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <Container>
      <Title>Todo List Styled Components</Title>
      <InputContainer>
        <Input
          type='text'
          placeholder='Enter a new task...'
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <Button onClick={addTask}>Add</Button>
      </InputContainer>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index}>
            {task}
            <RemoveButton onClick={() => removeTask(index)}>
              Remove
            </RemoveButton>
          </Task>
        ))}
      </ul>
    </Container>
  )
}

export default TodoList
