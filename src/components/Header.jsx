import { Link } from "react-router-dom"

const navigator = [
    {component: "/",  name: "Home"},
    {component: "/contact",  name: "Contato"},
    {component: "/sobre",  name: "Sobre"},
    {component: "/login",  name: "Login"},
]

const Header = () => {
  return (
    <nav>
     {/* <Link to={"/"}>Home</Link>
     <Link to={"/contact"}>
     Contato</Link> manual */}
     {navigator.map((iten) => (
        <Link key={iten.name} to={iten.component}>{iten.name}</Link>
     ) )}
    </nav>
  );
}

export default Header