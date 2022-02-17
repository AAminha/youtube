import styles from "./Menu.module.css";
import {Link} from "react-router-dom";

function Menu() {
  return (
    <div>
			<div>
				<Link to="/">홈</Link>
			</div>
			<div>
				<Link to="/explore">탐색</Link>
			</div>
			<div>
				<Link to="/subscription">구독</Link>
			</div>
			<div>
				<Link to="/assignment">과제</Link>
			</div>
    </div>
  )
}

export default Menu;