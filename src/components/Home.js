import devpic from '../images/dev.png'
import job_img from '../images/job.png'
import Typewriter from 'typewriter-effect'

const Home = () => { 
    return ( 
        <div className="home">
            <div className="home-head">

                <div className="home-content">
                    <h3 style={{'animation-delay':'0.2s'}}>Hey, I am </h3>
                    <h1 style={{'animation-delay':'0.4s'}}>Shobhit Chauhan</h1>
                    <h3 style={{'animation-delay':'0.6s'}}>
                        <span >
                            <Typewriter 
                            options={{autoStart:true,loop:true,delay:40,
                            strings:["Coding Enthusiast.", "Web Developer.", " CSE Student."], }}/>
                        </span>
                    </h3>
                    <div>
                        <button style={{'animation-delay':'0.8s'}}>Get In Touch</button>
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