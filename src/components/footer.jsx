import React from "react";

function Footer(){
    return(
        <footer className="footer">
            <div className="social-link">
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            <a href=""><i class="fa-brands fa-youtube"></i></a>
            </div>
            <div className="footer-text">
                <a href="">Condition of Use</a>
                <a href="">Privacy& Policy</a>
                <a href="">Press Room</a>
            </div>
            <span className="copyRight">&copy; MovieBox by Ismail Oladoja</span>
        </footer>
    )
}

export default Footer;