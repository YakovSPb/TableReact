import {NavLink} from "react-router-dom";
import "./index.scss"

const Nav = () => {
    return (
        <div className="menu">
            <NavLink to="/">Сотрудники</NavLink>
            <NavLink to="/meets">События</NavLink>
            <NavLink to="/parts">Участие</NavLink>
        </div>
    )
}

export default Nav;