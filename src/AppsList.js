import { Link } from "react-router-dom";
import "./AppList.css"
export default function AppList() {
    return (
        <ol className="app-list">
            <li>
                <Link to="/colorCounter">Color Counter</Link>
            </li>
            <li>
                <Link to="/mousePosition">Mouse Position (HOC)</Link>
            </li>

            <li>
                <Link to="/renderPropsText">Text Styles (render props)</Link>
            </li>
        </ol>
    )
}