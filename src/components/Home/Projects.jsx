import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cleanlaptop from "../../assets/Projects/cleanlaptop.png";
import bookerlaptop from "../../assets/Projects/bookerlaptop.png";
import nasalaptop from "../../assets/Projects/nasalaptop.png";
import historylaptop from "../../assets/Projects/historylaptop.png";
import quizlaptop from "../../assets/Projects/quizlaptop.png";
import cloudlaptop from "../../assets/Projects/cloudlaptop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Наши <strong className="purple">Проекты </strong>
        </h1>
        <p style={{ color: "white" }}>
          Вот несколько проектов, над которыми мы работали в последнее время
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cleanlaptop}
              title="Кристалл групп"
              description="Здесь клиенты могут легко ознакомиться с услугами уборки, оставить свои заявки и оценить отзывы довольных клиентов. Сайт отражает профессионализм компании и обеспечивает удобную платформу для взаимодействия с потенциальными клиентами."
              link="https://crystal-cleaning-spb.ru/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookerlaptop}
              title="Комплексные услуги бизнесу"
              description="Сайт был создан для компании, предоставляющей юридические и бухгалтерские услуги. На сайте клиенты могут ознакомиться с обширным спектром услуг, узнать больше о компетенции команды специалистов и легко связаться с ними для консультации. Дизайн и структура сайта специально разработаны для ясного и информативного представления услуг в этой важной сфере."
              link="https://booker-spb.ru/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nasalaptop}
              title="Космические снимки"
              description="Путешествие через объектив телескопа. Сайт разработан для предоставления уникальной возможности людям рассмотреть захватывающие снимки, предоставленные NASA. Здесь вы найдете космические пейзажи, планеты и звезды, оживляя воображение исследованием нашей вселенной. Этот сайт создан с целью поделиться восхитительными изображениями и вдохновить на интерес к космосу и наукам о нем."
              link="https://stormpero.github.io/SpacePictures/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizlaptop}
              title="Quiz"
              description="Веб-ресурс разработан для организации увлекательных викторин. Здесь каждый найдет увлекательные вопросы по разным тематикам, от общих знаний до специализированных областей. Пройдите викторины, проверьте свои знания и соревнуйтесь с друзьями, создавая интересное и образовательное времяпрепровождение."
              link="https://stormpero.github.io/Quiz/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudlaptop}
              title="CloudUnite"
              description="Веб приложение предлагает удобное решение для совмещения облачных хранилищ. Здесь вы можете легко интегрировать и управлять файлами с разных облачных платформ в одном удобном интерфейсе. Экономьте время и силы, имея доступ ко всем вашим данным в одном месте, вне зависимости от их расположения."
              link="https://crystal-cleaning-spb.ru/"
              isDev
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={historylaptop}
              title="История России"
              description="Веб-портал разработан в качестве информационной образовательной системы, посвященной истории России. Здесь вы найдете увлекательные уроки, интерактивные материалы и богатую базу знаний о ключевых событиях и личностях в истории страны. Дайте возможность пользователям углубиться в богатство нашего прошлого и лучше понять формирование современной России."
              link="https://crystal-cleaning-spb.ru/"
              isDev
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
