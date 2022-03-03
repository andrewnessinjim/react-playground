import { Link } from "react-router-dom";
import "./AppList.css"
export default function AppList() {
    return (
        <ol className="app-list">
            <li>
                <Link to="/colorCounter">Color Counter</Link>
            </li>
        </ol>
    )
}