import './DeleteItem.scss'
import { Title } from '../../components/title/Title'
import { Header } from '../../components/header/Header'
import { Link } from 'react-router-dom'

export const DeleteItem = () => {
  return (
    <div className="delete">
  
      <Header/>
      <Title/>
  
      <div className='deleteItem'>
        <div className="deleteItem-container">
          <h1>Deseja excluir esse item?</h1>
          <p>Colocar as descrições das tarefas aqui.</p>
          <div className="deleteItem-buttons">
            <Link to='/'>Não</Link>
            <Link to='/' className='yes'>Sim</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
