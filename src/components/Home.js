import devpic from '../images/dev.png'

const Home = () => {
    return ( 
        <div className="home">
            <div className="home-content">
                <h3>Hey, I am </h3>
                <h1>Shobhit Chauhan</h1>
                <h3> <span>Coding Enthusiast.</span></h3>
                <div>
                    <button>Get In Touch</button>
                </div>
            </div>
            <div className="home-img">
                <img src={devpic} alt="" />
            </div>
        </div>
     );
}
 
export default Home;