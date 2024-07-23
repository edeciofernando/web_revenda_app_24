import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import './Estrelas.css'

function Estrelas({ num }) {
  const icones = []

  for (let i = 1; i <= Math.floor(num); i++) {
    icones.push(<FaStar key={Math.random()}/>)
  }

  // 4.5 - 4.0
  if (num - Math.floor(num) > 0) {
    icones.push(<FaStarHalfAlt key={Math.random()}/>)
  }

  return (
    <div className="estrelas">
      {icones}
    </div>
  )
}

export default Estrelas