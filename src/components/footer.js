const Footer = () => {
    return ( 
        <div className="footer">
            <div className="bar"></div>
            <div className="foot">
                <div className="touch">GET IN TOUCH</div>
                <div className="icons">
                <a href="https://github.com/shobhitcs" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
                <ion-icon name="mail-open"></ion-icon>
                <a href="https://www.linkedin.com/in/shobhit-chauhan-7491bb203/" target="_blank" rel="noreferrer" ><ion-icon name="logo-linkedin" ></ion-icon></a>
                </div>
                <div className="copyright">Designed and Build by Shobhit Chauhan</div>
                <div className="attr">Icons used belongs to <a href="https://ionic.io/ionicons" className="attr-link">ionic.io</a> </div>
            </div>
        </div>
     );
}
 
export default Footer;