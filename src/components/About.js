import about_img from '../images/abot.png'
const About = () => {
    const str="< Who am I? />";
    return ( 
        <div className="about">
            <div className="question">
                <div className="who">{str}</div>
                <div className="img-specs">
                <ion-icon name="glasses-outline"></ion-icon>
                </div>
            </div>
            <div className="question-virtual">
                {/* Just a trasparent layer */}
            </div>
            <div className="bar-grey"></div>
            <div className="about-data">
                <div className="about-h"><img src={about_img} alt="" /></div>
                <div className="abt-content">A Full Stack Web Developer</div>
            </div>
        </div>
     );
}
 
export default About;