import {
  Container,
  Col,
  Row,
  Card,
  ListGroup,
  Stack,
  Button,
} from "react-bootstrap";
import NavBar from "../components/NavBar";
import "./about.css";
import ReactLogo from "../images/React-icon.png";
import HTMLLogo from "../images/HTML-icon.png";
import CSSLogo from "../images/CSS-icon.png";
import JavaLogo from "../images/java-icon.png";
import NodejsLogo from "../images/nodejs-icon.png";
import CPlusPlusLogo from "../images/C++icon.png";
import GithubLogo from "../images/GitHub-Mark-Light-64px.png";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import "../components/navbar.css";
import DartLogo from "../images/Dart-logo.png";
import FlutterLogo from "../images/flutter.png";
import CLogo from "../images/C_Logo.png";
import PythonLogo from "../images/python.png";
import Resume from "./FelixResume.pdf";
import TSLogo from "../images/typescript.png";
import JSLogo from "../images/javascript.png";
import Numpy from "../images/numpy.png";
import Pytorch from "../images/pytorch.png";

//import ReactLogo  from '../images/128px-React-icon.svg.png'

const Icon = (props) => {
  return (
    // <Col style={{ display: "flex", alignItems: "center", margin: "auto" }}>
    <Card
      text={"secondary"}
      background={"secondary"}
      style={{ width: "200px", justifyContent: "center" }}
      className="card text-white bg-secondary m-3"
    >
      <Card.Body id="no-padding" style={{ margin: "20px" }}>
        <Card.Title className="text-center" id="card-name">
          {props.name}
        </Card.Title>
        <Card.Img
          id="logo"
          src={props.img}
          style={{
            alignContent: "center",
            margin: "auto",
            display: "block",
            justifyContent: "center",
            width: props.width,
            height: props.height,
          }}
          //   style={{ width: "40px", height: "40px" }}
        />
      </Card.Body>
    </Card>
    // </Col>
  );
};

function AboutMe() {
  return (
    <div>
      {/* Welcome */}
      <Container fluid id="welcome">
        <h1>Welcome, I'm Felix</h1>
        {/*about*/}
      </Container>
      <Stack id="about">
        <h1>About Me</h1>
        <p> Student at the University of Waterloo, CS '25</p>
        <p>Enthusiastic to learn new coding skills</p>
        <a href={Resume} target="_blank" style={{ margin: "auto" }}>
          <Button className="m-auto mt-2" variant="secondary">
            My Resume
          </Button>
        </a>
      </Stack>
      <Container fluid id="skills" className="w-75">
        <Row>
          <h2>Skills</h2>
        </Row>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <>
            <Icon name="Python" img={PythonLogo} height="40px" />
          </>
          <>
            <Icon name="React" img={ReactLogo} />
          </>
          <>
            <Icon name="Java" img={JavaLogo} />
          </>
          <>
            <Icon name="Node.js" img={NodejsLogo} />
          </>
          <>
            <Icon name="Dart" img={DartLogo} height="40px" />
          </>
          <>
            <Icon name="Flutter" img={FlutterLogo} height="40px" />
          </>
          <>
            <Icon name="HTML" img={HTMLLogo} />
          </>
          <>
            <Icon name="CSS" img={CSSLogo} />
          </>
          <>
            <Icon name="C++" img={CPlusPlusLogo} />
          </>
          <>
            <Icon name="C" img={CLogo} height="40px" />
          </>
          <>
            <Icon name="Typescript" img={TSLogo} height="35px" />
          </>
          <>
            <Icon name="Javascript" img={JSLogo} height="35px" />{" "}
          </>
          <Icon name="NumPy" img={Numpy} height="35px" />{" "}
          <Icon name="Pytorch" img={PythonLogo} height="35px" />{" "}
        </Row>
      </Container>
      <Container id="hobbies" style={{ margin: "auto" }}>
        <h2>Hobbies</h2>
        <p id="longer">
          I love playing badminton, going to the gym, and challenging my
          thinking
        </p>
        <p id="shorter">
          During the pandemic, I started playing new video games and wrote a
          blog review on some of them
        </p>
        <p id="shorter">Check out my blog below!</p>
        <Link to="/blog" id="blogbutton">
          <Button
            className="btn btn-secondary "
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            My Game Reviews
          </Button>
        </Link>
      </Container>
      <Stack id="contact">
        <h2>Contact</h2>
        <h5>felix.liao@uwaterloo.ca</h5>
        <a id="githublogolink" href="https://github.com/LiaoFe" target="_blank">
          <img src={GithubLogo} id="githublogo"></img>
        </a>
      </Stack>
    </div>
  );
}

export default AboutMe;
