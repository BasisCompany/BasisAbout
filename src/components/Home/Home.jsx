import { Col, Container, Row } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle";
import About from "./About";
import Projects from "./Projects";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Всем привет!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                МЫ
                <strong className="main-name"> БАЗИС</strong>
              </h1>

              <div
                style={{
                  padding: 50,
                  textAlign: "left",
                }}
              >
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Projects />
      <About />
    </section>
  );
}

export default Home;
