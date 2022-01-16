import { Container, Col, Row, Card, ListGroup, Stack, Button } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import './about.css'
import ReactLogo  from '../images/React-icon.png'
import HTMLLogo from '../images/HTML-icon.png'
import CSSLogo from '../images/CSS-icon.png'
import JavaLogo from '../images/java-icon.png'
import NodejsLogo from '../images/nodejs-icon.png'
import CPlusPlusLogo from '../images/C++icon.png'
import GithubLogo from '../images/GitHub-Mark-Light-64px.png'
import Resume from "./FelixLiaoResumev2.pdf"
import { Link } from 'react-router-dom'
//import ReactLogo  from '../images/128px-React-icon.svg.png'

const Icon = (props) =>{
    return (
            <Card
                text={'secondary'}
                background = {'secondary'}
                style={{ width: 'auto' }}
                id="cards"
                className="card text-white bg-secondary mb-4"
            >
                <Card.Body id="no-padding"> 
                <Card.Title className="text-center" id="card-name">
                    {props.name} 
                </Card.Title>
                <Card.Img id="logo"
                          src={props.img}/>
                
                </Card.Body>
            </Card>
    );
}

function AboutMe(){
    return(
        <div>
            {/* Welcome */}
            <Container fluid id="welcome">              
                 <h1 >Welcome, I'm Felix</h1>
                    {/*about*/}
            </Container>
                    <Stack id="about">
                        <h1>About Me</h1>
                        <p> Student at the University of Waterloo, CS '25</p>
                        <p>Enthusiastic to learn new coding skills</p>
                        <a href={Resume} target="_blank" style={{margin:"auto"}}>
                            <Button className="m-auto" variant="secondary"  >
                                 My Resume
                            </Button>
                        </a> 
                    </Stack>
                <Container fluid id="skills" className="w-75">
                    <Row>
                        <h2>Skills</h2>
                    </Row>
                    <Row>   
                        <Col>
                            <Icon name="React" img={ReactLogo}/>
                        </Col>

                        <Col>
                            <Icon name="Java" img={JavaLogo}/>
                        </Col>

                        <Col>
                            <Icon name="Node.js" img={NodejsLogo}/>
                        </Col>
                    
                        <Col>
                            <Icon name="HTML" img={HTMLLogo}/>
                        </Col>

                        <Col>
                            <Icon name="CSS" img={CSSLogo}/>
                        </Col>

                        <Col>
                            <Icon name="C++" img={CPlusPlusLogo}/>
                        </Col>
  
                    </Row>
                </Container>
                <Stack id="hobbies" style={{margin: "auto"}}>
                    <h2>Hobbies</h2>
                    <p id="longer">I love playing badminton, going to the gym, and challenging my thinking</p>
                    <p id="shorter">During the pandemic, I started playing new video games and wrote a blog review on some of them</p>
                    <p>Check out my blog below!</p>
                    <Button className="btn btn-secondary" href='/blog' id="blogbutton">My Game Reviews</Button>
                </Stack>
                <Stack id="contact">
                        <h2>
                            Contact
                        </h2>
                        <h5>felix.liao@uwaterloo.ca</h5>
                        <a id="githublogolink" href="https://github.com/LiaoFe" target="_blank"><img src={GithubLogo} id="githublogo" ></img></a>
                </Stack>    
            </div>
    );
}

export default AboutMe
