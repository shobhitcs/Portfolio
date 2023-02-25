import devpic from '../images/dev.png'
import job_img from '../images/job.png'
const Home = () => {
    return ( 
        <div className="home">
            <div className="home-head">

                <div className="home-content">
                    <h3>Hey, I am </h3>
                    <h1>Shobhit Chauhan</h1>
                    <h3> <span>Coding Enthusiast</span></h3>
                    <div>
                        <button>Get In Touch</button>
                    </div>
                </div>
                <div className="home-img">
                    <img src={devpic} alt="" />
                </div>
            </div>
            <div className="home-data">
                <div className="code-test-img"><img src={job_img} alt="" /></div>
                <div className="performance">
                    <div className="speaker"></div>
                    <div className="card">
                        <div className="card-head">Programming Languages</div>
                        <div className="card-body"> C | C++ | Python | Fortran </div>
                        <div className="card-head">Web Skills</div>
                        <div className="card-body">HTML | CSS | Javascript | React | Git | GitHub</div>
                    </div>
                    <div className="push-btn"></div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;