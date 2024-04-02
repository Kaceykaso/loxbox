import { FaPencilAlt, FaToolbox } from "react-icons/fa"
import { GiFishBucket } from "react-icons/gi"
import { RiShieldKeyholeFill } from "react-icons/ri"

function Footer() {

    return (
        <footer className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 grow w-120">
                <ul>
                    <li><h4><GiFishBucket />Products & Services</h4></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Catering</a></li>
                </ul>
                <ul>
                    <li><h4><FaToolbox />Resources</h4></li>
                    <li><a href="#">User Stories</a></li>
                    <li><a href="#">Research</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Documents</a></li>
                </ul>
                <ul>
                    <li><h4><RiShieldKeyholeFill />About Us</h4></li>
                    <li><a href="#">About LoxBox</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Newsroom</a></li>
                </ul>
            </div>
            <form className="signup w-96">
                <h3>Sign up for our newsletter to get the latest on how our smoked meats can protect your platform</h3>
                <input type="text" placeholder="Your email" title="email" />
                <button title="Sign Up" className="submitBtn"><FaPencilAlt />Sign Up</button>
            </form>
        </footer>
    )
}

export default Footer