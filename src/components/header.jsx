import { AiOutlineShoppingCart } from "react-icons/ai";
import "../style/header.css";
const header = () => {
    return (
        <div className="header" id="Home">
            <h2>
                <a href="#Home">
                    Your <span className="blue">Home</span>
                </a>
            </h2>

            <div className="hide-on-mobile">
                <ul>
                    <li>
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#service">Service</a>
                    </li>

                    <li>
                        <a href="#Footer">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="cart">
                <AiOutlineShoppingCart />
            </div>
        </div>
    );
};

export default header;
