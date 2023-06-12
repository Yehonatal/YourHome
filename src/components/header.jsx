const header = () => {
    return (
        <div className="header">
            <h2>
                Your <span className="blue">Home</span>
            </h2>

            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#service">Service</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <button>Sign In</button>
        </div>
    );
};

export default header;
