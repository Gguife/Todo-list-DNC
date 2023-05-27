import { Title } from '../../components/title/Title'
import { Header } from '../../components/header/Header'
import './EditItem.scss'
import { Link } from 'react-router-dom'

export const EditItem = () => {
  return (
    <div className="edit">

      <Header/>
      <Title/>

      <div className='editItem'>
        <div className="editItem-container">
          <h1>Deseja editar esse item?</h1>
          <p>Colocar as descrições das tarefas aqui.</p>
          <div className="editItem-buttons">
            <Link to='/'>Não</Link>
            <Link to='/' className='yes'>Sim</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
