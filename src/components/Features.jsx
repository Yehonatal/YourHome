import featImgOne from "../assets/img/img-foc1.jpg";
import featImgTwo from "../assets/img/img-foc2.jpg";
import { BiBed } from "react-icons/bi";
import { FaShower } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import owner from "../assets/img/owner.jpg";
import { FiChevronDown } from "react-icons/fi";

import "../style/feature.css";

const Features = () => {
    return (
        <>
            <div className="features">
                <div className="feature-card">
                    <div className="feat-content">
                        <h3 className="blue">$20,000</h3>
                        <h3>Villa on Washington Avenue</h3>
                        <div className="location">
                            <CiLocationOn />
                            <p className="location-tag">Mirpur City, Dhaka</p>
                        </div>
                        <div className="feat-details">
                            <div className="feat-det">
                                <BiBed />
                                <p>4</p>
                            </div>
                            <div className="feat-det">
                                <FaShower />
                                <p>2</p>
                            </div>
                            <div className="feat-det">
                                <BsArrowsFullscreen />
                                <p>800sq</p>
                            </div>
                        </div>
                        <hr />

                        <div className="owner">
                            <div className="owner-img">
                                <img src={owner} alt="" />
                                <p>Owner</p>
                            </div>
                            <AiFillHeart />
                            <BsShare />
                        </div>
                    </div>
                    <div className="feat-img">
                        <img src={featImgOne} alt="" />
                    </div>
                </div>
                <div className="feature-card">
                    <div className="feat-content">
                        <h3 className="blue">$5,000/month </h3>
                        <h3>Luxury villa in Rego Park</h3>
                        <div className="location">
                            <CiLocationOn />
                            <p className="location-tag">Mirpur City, Dhaka</p>
                        </div>
                        <div className="feat-details">
                            <div className="feat-det">
                                <BiBed />
                                <p>4</p>
                            </div>
                            <div className="feat-det">
                                <FaShower />
                                <p>2</p>
                            </div>
                            <div className="feat-det">
                                <BsArrowsFullscreen />
                                <p>900sq</p>
                            </div>
                        </div>
                        <hr />

                        <div className="owner">
                            <div className="owner-img">
                                <img src={owner} alt="" />
                                <p>Owner</p>
                            </div>
                            <AiFillHeart />
                            <BsShare />
                        </div>
                    </div>
                    <div className="feat-img">
                        <img src={featImgTwo} alt="" />
                    </div>
                </div>
            </div>
            <button className="flx-btn feat-btn">
                See All <FiChevronDown />
            </button>
        </>
    );
};

export default Features;
