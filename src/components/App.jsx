/* eslint-disable react/no-unescaped-entities */
import house from "../assets/img/house2.jpg";
import "../style/App.css";
import Header from "../components/header";
import Search from "../components/search";
import Cards from "../components/Cards";
import Features from "../components/Features";
import Latest from "../components/Latest";
import Footer from "../components/Footer";

function App() {
    return (
        <>
            <Header />
            <main className="hero-section">
                <div className="hero-info">
                    <h1 className="site-title">
                        Find Your Best Smart{" "}
                        <span className="blue">Real & Beautiful Home</span>
                    </h1>
                </div>
                <div className="hero-img">
                    <img className="house-img" src={house} alt="" />
                </div>
            </main>
            <Search />

            <div className="subtitle-focus">
                <h5 className="blue">WHAT WE DO</h5>
                <h2>OUR MAIN FOCUS</h2>
            </div>

            <Cards />

            <div className="subtitle-focus">
                <h5 className="blue">OUR PROPERTY</h5>
                <h2>LATEST PROPERTIES</h2>
            </div>
            <Latest />

            <div className="subtitle-focus">
                <h5 className="blue">PROPERTIES</h5>
                <h2>FEATURED PROPERTIES</h2>
            </div>
            <Features />
            <Footer />
        </>
    );
}

export default App;
