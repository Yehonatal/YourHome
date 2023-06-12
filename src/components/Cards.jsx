import { HiOutlineHome } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineHomeWork } from "react-icons/md";

const Cards = () => {
    return (
        <div className="cards flx">
            <div className="card">
                <div className="card-icon">
                    <HiOutlineHome />
                </div>
                <h2>Buy a Home</h2>
                <p>
                    It is a long established fact that a reader will be
                    distracted by a readable content of a page{" "}
                </p>
                <button className="flx-btn">
                    <FiChevronDown />
                </button>
            </div>
            <div className="card">
                <div className="card-icon">
                    <MdOutlineHomeWork />
                </div>
                <h2>Rent a Home</h2>
                <p>
                    It is a long established fact that a reader will be
                    distracted by a readable content of a page{" "}
                </p>
                <button className="flx-btn">
                    More <FiChevronDown />
                </button>
            </div>
            <div className="card">
                <div className="card-icon">
                    <GiMoneyStack />
                </div>
                <h2>Sell a Home</h2>
                <p>
                    It is a long established fact that a reader will be
                    distracted by a readable content of a page{" "}
                </p>
                <button className="flx-btn">
                    <FiChevronDown />
                </button>
            </div>
        </div>
    );
};

export default Cards;
