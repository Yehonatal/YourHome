import "../style/footer.css";
const Footer = () => {
    return (
        <footer className="footer flax" id="Footer">
            <div>
                <h2 className="foot-title">
                    <a href="#Home">
                        Your <span className="blue">Home</span>
                    </a>
                </h2>
                <p>
                    Our platform offers an extensive range of homes, from cozy
                    apartments to luxurious estates, catering to diverse
                    preferences and budgets.
                </p>
            </div>
            <div>
                <div>
                    <h2>
                        <strong>Quick Links</strong>
                    </h2>
                </div>
                <div className="footer-nav">
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
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h2>
                        <strong>Services </strong>
                    </h2>
                </div>
                <div className="footer-nav">
                    <ul>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Privacy policy</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h2>
                        <strong>Contact</strong>
                    </h2>
                </div>
                <div className="footer-nav">
                    <p>Address: Ethiopia, Harar</p>
                    <p>Phone: 0256660044</p>
                    <p>Email: youhome@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
