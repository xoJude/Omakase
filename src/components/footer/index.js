import "./index.css"
import logo from "../../assets/omakase-video.png";
import insta from "../../assets/instagram.svg";
import fb from "../../assets/facebook.svg";


function Footer () {
    return ( 
        <footer>
            <div className="bloc-footer">
                <a href="https://www.goma-restaurant.com/"><img src={logo} width="250px" height="80px"></img></a>
                <nav className="navbar-footer">
                    <ul>
                        <a href="#"><li>Mention Légales</li></a>
                        <a href="#" target="_blank"><li>VANDIER Thibaut</li></a>
                        <a href="#"><li>GIGON Jude</li></a>
                        <li>
                            <ul className="social-media">
                                <a href="https://www.facebook.com" target="/blank"><li><img src={fb}></img></li></a>
                                <a href="https://www.instagram.com/" target="/blank"><li><img src={insta}></img></li></a>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
export default Footer;