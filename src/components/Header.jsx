import { FiBox } from "react-icons/fi"
import "../css/header.css"

function Header() {

    return (
        <header className="sticky top-0 left-0 right-0 flex flex-row py-20 text-2xl">
            <h1 className="flex flex-row gap-1"><FiBox />LOXBOX</h1>
            <ul className="flex flex-row flex-1 w-64 gap-y-15 justify-end">
                <li><a href="#">Products</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header