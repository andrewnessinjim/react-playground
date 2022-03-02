import { Link } from "react-router-dom";

export default function AppList() {
    return (
        <ol>
            <Link to="/colorCounter">
                <li>Color Counter</li>
            </Link>
        </ol>
    )
}