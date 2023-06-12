import { FiChevronDown } from "react-icons/fi";
import { CiLocationOn, CiShoppingTag } from "react-icons/ci";
import { BiHomeHeart } from "react-icons/bi";

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
                <p>Property Type</p>
                <FiChevronDown />
            </div>
            <div className="flx">
                <CiShoppingTag />
                <p>Max Price</p>
                <FiChevronDown />
            </div>
            <div>
                <button>Search</button>
            </div>
        </div>
    );
};

export default search;
