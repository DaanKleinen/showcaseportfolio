import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../vieuwStyle/home.css";
import Testimonials from "../components/Testimonial";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import homeScreenImg from "../img/homeScreenImg.png";
import AboutMeImg from "../img/aboutMeImg.png";
import { ReactComponent as Wave } from "../img/wave1.svg";
import WorkImage from "../img/WorkImage.png";
import design from "../img/design.png";
import developement from "../img/development.png";
import stancorstjens from "../img/stancorstjens.png";
import springfield from "../img/springfield.png";
import wojoCard from "../img/wojoCard.png";
import { ReactComponent as Logo } from "../img/logo.svg";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div id="homescreen">
        <h1>
          Web <span>design</span> and <span>Front-end</span> development
        </h1>
        <p>I design and create your online business card!</p>
        <img id="homeScreenImg" src={homeScreenImg} alt="" />
      </div>
      <Wave id="wave1" />
      <div id="aboutMe">
        <h1 className="white">About me</h1>
        <p className="white">
          <strong className="white">Hi I am Daan Kleinen,</strong>
          <br />I am a 19 year old aspiring Front-end developer from the
          Netherlands. I am now in my third semester of ICT & Media at Fontys
          University of Applied Sciences in Tilburg. <br />
          <br />
          When I was young I didn’t knew what I wanted to be, till the moment I
          found out about building websites. I was so fascinated with the little
          things I did in HTML, like the First time I saw “Hello World” in my
          browser after a little YouTube tutorial was a moment of euphoria.
          Since that day my eager to learn more about front-end development has
          not dwindled down any bit. <br />
          <br />
          Now I can write fluent in HTML, CSS, vanilla JavaScript and React and
          make my wacky ideas reality!
        </p>
        <img src={AboutMeImg} alt="" />
      </div>
      <div id="workHomePage">
        <h1>Some of my work</h1>
        <p id="subtext">Click on the images for more info</p>
        <div data-aos="fade-right" id="workImg">
          <img src={WorkImage} alt="" />
        </div>
        <div id="workWrapper">
          <div className="workItem">
            <figure className="snip1206">
              <img src={stancorstjens} alt="sample74" />
              <figcaption>
                <h2>Stan Corstjens tegels en tegelwerken</h2>
                <p>
                  Design and development
                  <br />
                  HTML, CSS, vanilla JavaScript <br />
                  <a href="#" className="white">
                    Learn More &gt;
                  </a>
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="workItem">
            <figure className="snip1206">
              <img src={springfield} alt="sample74" />
              <figcaption>
                <h2>Springfield '75</h2>
                <p>
                  Design and development
                  <br />
                  HTML, CSS, vanilla JavaScript <br />
                  <a href="#" className="white">
                    Learn More &gt;
                  </a>
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="workItem" id="stanCorstjens">
            <figure className="snip1206">
              <img src={wojoCard} alt="sample74" />
              <figcaption>
                <h2>Wojo - thank you card</h2>
                <p>
                  Design
                  <br />
                  Adobe Illustrator <br />
                  <a href="#" className="white">
                    Learn More &gt;
                  </a>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <Link to="/work" onClick={scrollToTop}>
          <h3 className="button">
            See more of my Work{" "}
            <FaArrowRight fill="var(--highlight)" className="arrow" />
          </h3>
        </Link>
      </div>
      <Wave id="wave2" />
      <div id="servicesHomePage">
        <h1 className="white">Services</h1>
        <div id="serviceWrapper">
          <div className="services">
            <img src={design} alt="" />
            <div className="serviceText">
              <h2>Design</h2>
              <p>
                I love simplistic designs that still has structure and that has
                been thought through till the finishing touches.
              </p>
              <h3>I design:</h3>
              <p>Responsive websites, Apps, Logos</p>
              <h3>Tools:</h3>
              <p>
                Adobe XD
                <br />
                Adobe Illustrator
                <br />
                Adobe Photoshop
                <br />
                Adobe After Effects
                <br />
                Mockup Frames
                <br />
              </p>
            </div>
          </div>
          <div className="services">
            <img src={developement} alt="" />
            <div className="serviceText">
              <h2>Development</h2>
              <p>
                I enjoy bringing my wacky ideas into reality through code and
                setting them free on the web.
              </p>
              <h3>Languages:</h3>
              <p>ReactJs, HTML, CSS, Vanilla Javascript</p>
              <h3>Tools:</h3>
              <p>
                VsCode
                <br />
                Gitlab
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="testimonials">
        <h1>Testimonials</h1>
        <p>Look what these nice people had to say!</p>
        <Testimonials />
      </div>

      <div id="contact">
            <h1>Interested in working together?</h1>
            <a href=""><h2>Contact me now!</h2></a>
          </div>

      <div id="footer">
        <div id="footerWrapper">
          <div id="footerLogo">
            <Logo height="100" width="100" fill="#fff"/>
            <h3>Daan Kleinen</h3>
          </div>
          <div id="footerInfo">
          <h1>My media:</h1>
          <FaInstagram fill="#fff" fontSize="50px" />
          <FaLinkedin fill="#fff" fontSize="50px" />
          <FaGitlab fill="#fff" fontSize="50px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
