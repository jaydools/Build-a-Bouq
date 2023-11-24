import "./Footer.scss";
import twitter from "../../Assets/Images/twitter.svg";
import facebook from "../../Assets/Images/facebook.svg";
import instagram from "../../Assets/Images/instagram.svg";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="footer-left__text">
                    <p>
                        Build your custom bouquet online and know exactly what you're ordering. No
                        matter the season, you'll only see what we have in stock. Customize it your
                        way, palce your order, recieve exactly what you want. It's that easy.
                    </p>
                </div>
                <div className="footer-icons">
                    <a href="https://x.com" target="_blank" rel="noreferrer">
                        <img className="footer-icons__icon" src={twitter} alt="twitter icon" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <img className="footer-icons__icon" src={facebook} alt="facebook icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <img className="footer-icons__icon" src={instagram} alt="instagram icon" />
                    </a>
                </div>
                <p className="footer-icons__copyright">Copyright Jordan Dooley, 2023</p>
            </div>
            <div className="footer-right">
                <div className="footer-right__heading">
                    <p className="footer-right__text">Join our newsletter</p>

                    <form className="footer-right__heading-form">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            name="search"
                            className="footer-right__heading-box"
                        ></input>
                        <button type="submit" className="footer-right__heading-button">
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className="footer-right__contact">
                    <div className="footer-right__links">
                        <div className="footer-right__linksleft">
                            <a href="" className="footer-right__content-left">
                                Home
                            </a>
                            <a href="" className="footer-right__content-left">
                                About
                            </a>
                            <a href="" className="footer-right__content-left">
                                Blog
                            </a>
                            <a href="" className="footer-right__content-left">
                                Contact Us
                            </a>
                        </div>
                        <div className="footer__right-linksright">
                            <a href="" className="footer-right__content-right">
                                Privacy
                            </a>
                            <a href="" className="footer-right__content-right">
                                Cookies
                            </a>
                            <a href="" className="footer-right__content-right">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
