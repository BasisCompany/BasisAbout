import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../assets/about.png";
import Tilt from "react-parallax-tilt";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";

function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{ marginBottom: "40px" }}
          >
            <h1 style={{ fontSize: "2.6em" }}>
              НЕМНОГО <span className="purple"> ИНФОРМАЦИИ </span> О НАС
            </h1>
            <p className="home-about-body">
              Мы с увлечением занимаемся разработкой сайтов и веб-приложений,
              делая уникальный дизайн и функциональность&nbsp;
              <b className="purple">реальностью</b>
              <br />
              <br />В нашем технологическом стеке — передовые инструменты:&nbsp;
              <b className="purple">React </b> для фронтенда,&nbsp;
              <b className="purple">Node.js </b> и&nbsp;
              <b className="purple">PosgreSQL </b> для серверной части,
              обеспечивая
              <b className="purple">&nbsp;надежность</b> и
              <b className="purple">&nbsp;производительность</b>
              <br />
              <br />
              Мы не только создаем <b className="purple">продукты</b>, но и
              погружаемся в потребности клиентов, делая интерфейсы удобными и
              функциональными
              <br />
              <br />
              Наша команда постоянно
              <b className="purple">&nbsp;совершенствуется</b>, следя за
              новейшими тенденциями и применяя их в наших проектах, чтобы
              оставаться в авангарде
              <b className="purple">&nbsp;веб-разработки</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={avatar}
                className="img-fluid"
                alt="avatar"
                style={{ maxHeight: "250px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>КОНТАКТЫ</h1>
            <p>Связаться с нами</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <div className="home-social-icons">
                  <a
                    href="https://t.me/ArtemZhirenkin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={telegram}
                      style={{
                        height: "30px",
                        paddingRight: "4px",
                      }}
                    />
                  </a>
                </div>
              </li>
              <li className="social-icons">
                <div className="home-social-icons">
                  <a
                    href="https://api.whatsapp.com/send?phone=79966318568"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={whatsapp}
                      style={{
                        height: "30px",
                        paddingLeft: "3px",
                        paddingBottom: "2px",
                      }}
                    />
                  </a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default About;
