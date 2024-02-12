import logopuma from "../assets/logopuma.png"
import "./Header.css"


const Header = () => {
  return (
    <div className="header ">
      <div>
        <img src={logopuma} alt="" width={50} />
      </div>
      <nav className="head">
        <ul>

          <li>Home</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
