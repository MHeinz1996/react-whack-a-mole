import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {

  const { whack, dens } = props
  // console.log(key)
  return (
    <div className="den">
      { dens && <img src={MoleIcon} className="Mole" alt="Mole" onClick={whack}/> }
    </div>
  )
}

export default Mole
