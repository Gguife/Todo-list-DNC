import './ItemList.scss'
import { db } from '../../mock/dbMock'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//Icons
import Edit from '../../assets/edit.png'
import Delete from '../../assets/delete.png'

//component
import { Header } from '../../components/header/Header'
import { Title } from '../../components/title/Title'

//pages-modal
import { DeleteItem } from '../deleteItem/DeleteItem'
import { EditItem } from '../editItem/EditItem'

export const ItemList = () => {
  const [completedTask, setCompletedTask] = useState(db.map((item) => item.completed))

  const handleCheckboxChange = (key) =>{
    const updateCheck = [...completedTask]
    updateCheck[key] = !updateCheck[key]
    setCompletedTask(updateCheck)
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
            {db.map((item, key) => (
            <tr key={key}>
              <td className='position-start'>{item.title}</td>
              <td><input type="checkbox" checked={completedTask[key]} onChange={() => handleCheckboxChange(key)} /></td>
              <td className='position-end'>
                <Link to='/edit'><img className='edit' src={Edit} alt="" /></Link>
                <Link to='/delete'><img className='delete' src={Delete} alt="" /></Link>
              </td>
            </tr>
          ))}
          <tr>
              <td><em>Nova tarefa...</em></td>
              <td></td>
              <td>+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
