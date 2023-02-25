

const Contact = () => {
    return ( 
        <div className="contact">
            <div className="cont-1">
                <div className="cont-text">Get To Know Me !</div>
                <div className="addr-icon"><ion-icon name="mail-outline"></ion-icon></div>
                <div className="cont-email">shobhitchauhancs@gmail.com</div>
                <div className="cont-details">
                    <div className="addr-icon"><ion-icon name="location-outline"></ion-icon></div>
                    <div className="address"> 
                    <div className="iit">Indian Institute of Technology, (IIT Goa) </div>
                    <div className="iit-address" > Bhausaheb Bandodkar Technical Education Complex, Goa Engineering College Campus, Farmagudi, Ponda, Goa 403401</div>
                    </div>
                </div>
            </div>
            <div className="cont-tab">
                <div className="cont-head">CONTACT FORM</div>
                <div className="cont-group">
                    <div className="cont-form">
                        <form action="">
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="button" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;