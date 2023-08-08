import latImgOne from "../assets/img/property1.jpg";
import latImgTwo from "../assets/img/property2.jpg";
import latImgThree from "../assets/img/property3.jpg";
import { BiBed } from "react-icons/bi";
import { FaShower } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import owner from "../assets/img/owner.jpg";
import { FiChevronDown } from "react-icons/fi";

import "../style/latest.css";

const Latest = () => {
    return (
        <>
            <div className="latests">
                <div className="latest-card">
                    <div className="lat-img">
                        <img src={latImgOne} alt="" />
                    </div>
                    <div className="lat-content">
                        <div className="flx lat">
                            <h3>Duplex Apartment</h3>
                            <p className="blue">$47.5M</p>
                        </div>
                        <div className="location">
                            <CiLocationOn />
                            <p className="location-tag">Mirpur City, Dhaka</p>
                        </div>
                        <div className="lat-details">
                            <div className="lat-det">
                                <BiBed />
                                <p>8</p>
                            </div>
                            <div className="lat-det">
                                <FaShower />
                                <p>10</p>
                            </div>
                            <div className="lat-det">
                                <BsArrowsFullscreen />
                                <p>1,900sqft</p>
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
                </div>
                <div className="latest-card">
                    <div className="lat-img">
                        <img src={latImgTwo} alt="" />
                    </div>
                    <div className="lat-content">
                        <div className="flx lat">
                            <h3>Duplex Apartment</h3>
                            <p className="blue">$16.75M </p>
                        </div>
                        <div className="location">
                            <CiLocationOn />
                            <p className="location-tag">Mirpur City, Dhaka</p>
                        </div>
                        <div className="lat-details">
                            <div className="lat-det">
                                <BiBed />
                                <p>5</p>
                            </div>
                            <div className="lat-det">
                                <FaShower />
                                <p>7</p>
                            </div>
                            <div className="lat-det">
                                <BsArrowsFullscreen />
                                <p>1,100sqft</p>
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
                </div>
                <div className="latest-card">
                    <div className="lat-img">
                        <img src={latImgThree} alt="" />
                    </div>
                    <div className="lat-content">
                        <div className="flx lat">
                            <h3>Duplex Apartment</h3>
                            <p className="blue">$11.85M </p>
                        </div>
                        <div className="location">
                            <CiLocationOn />
                            <p className="location-tag">Mirpur City, Dhaka</p>
                        </div>
                        <div className="lat-details">
                            <div className="lat-det">
                                <BiBed />
                                <p>8</p>
                            </div>
                            <div className="lat-det">
                                <FaShower />
                                <p>8</p>
                            </div>
                            <div className="lat-det">
                                <BsArrowsFullscreen />
                                <p>1,200sqft</p>
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
                </div>
            </div>
            <button className="flx-btn lat-btn">
                See All <FiChevronDown />
            </button>
        </>
    );
};

export default Latest;
