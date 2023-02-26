

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
                            <div className="name-submit form-big">
                                <input type="text" placeholder="First Name" className="form-small s1" />
                                <input type="text" placeholder="Last Name" className="form-small s2" />
                            </div>
                            <input type="text" placeholder="Subject" className="form-big" />
                            <input type="email" placeholder="Your Email" className="form-big" />
                            <textarea name="message" placeholder="Message" className="form-big" id="" cols="30" rows="10"></textarea>
                            <input type="submit" value="Send" className="form-x-small" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;