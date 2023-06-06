import './ItemList.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//Icons
import Edit from '../../assets/edit.png'
import Delete from '../../assets/delete.png'

//component
import { Header } from '../../components/header/Header'
import { Title } from '../../components/title/Title'

export const ItemList = () => {


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
              <td>Testando</td>
              <td><input type="checkbox" /></td>
              <td>
                <img src={Edit} alt="Editar" />
                <img src={Delete} alt="Remover" />
              </td>
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
