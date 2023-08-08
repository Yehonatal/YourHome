import { FiChevronDown } from "react-icons/fi";
import { CiLocationOn, CiShoppingTag } from "react-icons/ci";
import { BiHomeHeart } from "react-icons/bi";
import "../style/search.css";

const search = () => {
    return (
        <div id="service" className="src flx">
            <div className="flx">
                <CiLocationOn />
                <p>Location</p>
                <FiChevronDown />
            </div>
            <div className="flx">
                <BiHomeHeart />
                <p>Property </p>
                <FiChevronDown />
            </div>
            <div className="flx">
                <CiShoppingTag />
                <p>Max </p>
                <FiChevronDown />
            </div>
            <div className="btn-src">
                <button>Search</button>
            </div>
        </div>
    );
};

export default search;
