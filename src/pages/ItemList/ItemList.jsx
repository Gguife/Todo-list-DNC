import './ItemList.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//Icons
import Edit from '../../assets/edit.png'
import Delete from '../../assets/delete.png'

//component
import { Header } from '../../components/header/Header'
import { Title } from '../../components/title/Title'

export const ItemList = () => {
  const [tasks, setTasks] = useState([])

  //Envio da Nova tarefa 
  const handleSubmit = (event) =>{
    event.preventDefault()
    const newTask = event.target.elements.task.value
    setTasks(tasks => [...tasks, {name: newTask, completed: false}])
    event.target.reset()   
  }

  //Checkbox toggle
  const handleToggle = (key) =>{
    setTasks(tasks => {
      const updatedTasks = tasks.map((task, i) => {
        if (i === key) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return updatedTasks;
    });
  }

  //Funcionalidade dos botoes Edit e Delite
  const handleDelite = (key) =>{
    setTasks(tasks => {
      const updatedTasks = [...tasks]
      updatedTasks.splice(key, 1)
      return updatedTasks
    })
  }

  return (

    <div className='itemList'>
      
    <Header />
    <Title />

      <div className="itemList-container">
        <table>
          <thead>
            <tr>
              <th className='position-start'>Tarefa</th>
              <th>Status</th>
              <th className='position-end'>Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3">
                <hr />
              </td>
            </tr>
            {tasks.map((task, key) => (
              <tr key={key}>
                <td>{task.name}</td>
                <td><input type="checkbox" checked={task.completed} onChange={() => handleToggle(key)} /></td>
                <td>
                  <img src={Delete} alt="Deletar" onClick={() => handleDelite(key)} />
                </td>
              </tr>
            ))
            }
            <tr>
              <td>
                <form action="" onSubmit={handleSubmit}>
                  <input type="text" name='task' placeholder='Nova Tarefa...' />
                  <button type='submit'>+</button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
