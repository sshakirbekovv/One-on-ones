import React, { useEffect, useState } from "react";
import "./Content.scss";
import Aos from "aos";
import { Col, Container, Row } from "react-bootstrap";
import icon from "../../assets/images/icon-check.svg";
import { ContentInfo } from "../../types/content.type";

const Content: React.FC<{ props: ContentInfo; photo: string }> = ({
  props,
  photo,
}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const checkScrollButton = () => {
    if (!showButton && window.pageYOffset > 550) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= 550) {
      setShowButton(false);
    }
  };

  window.addEventListener("scroll", checkScrollButton);

  return (
    <>
      <section className="consultation" data-aos="fade-in" id="consultation">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xl={6} lg={6} className="order-mobile-1">
              <div className="consultation__info">
                <h1>{props.title}</h1>
                <ul>
                  {props.list.map((item) => (
                    <li>{item.title}</li>
                  ))}
                </ul>
                <div>
                  <a
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Записаться на консультацию
                  </a>
                </div>
              </div>
            </Col>
            <Col xl={5} lg={6} sm={12} className="order-mobile-0 d-flex justify-content-center align-items-center mt-md-5">
              <div className="consultation__photo" style={{background: `url(${photo}) no-repeat center/cover`}}>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="experience" data-aos="fade-in" id="experience">
        <Container>
          <div className="experience__content">
            <h1 className="pb-3">Experience</h1>
            {props.accomplishmentlists.map((accomplishmentlist) => (
              <ul>
                {accomplishmentlist.accomplishments.map((accomplishment) => (
                  <li>{accomplishment.title}</li>
                ))}
              </ul>
            ))}
          </div>
        </Container>
      </section>
      <section className="prices" data-aos="fade-in" id="prices">
        <Container>
          <h1>Планы и Тарифы</h1>
          <span className="plan">Выберите подходящий себе план</span>
          <Row className="align-items-center justify-content-center pt-5 mt-5">
            <Col xl={4} lg={5}>
              <div className="prices__content">
                <span>Стандартный</span>
                <h2>25 000 ₸</h2>
                <p>
                  Если вы студент / специалист, только начинающий поиск
                  карьерного пути, либо уже имеющий конкретную цель (подготовка
                  к job interview, коррекция имеющегося резюме, планирование
                  следующих карьерных шагов), то этот тариф для вас. <br />
                  На консультации мы разберём одну интересующую вас тему
                  (примеры: как правильно искать
                  стажировки/работу/программы/стипендии, как подходить к смене
                  карьерного трека, подготовка к интервью, обратная связь по
                  резюме). На консультации мы подробно разберём вашу цель и
                  спланируем следующие шаги.
                </p>
                <ul>
                  <li>
                    <img src={icon} alt="check" />
                    Консультация (45 мин)
                  </li>
                  <li>
                    <img src={icon} alt="check" />
                    Email поддержка (1 неделя)
                  </li>
                </ul>
                <div>
                  <a
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="appoint"
                  >
                    Записаться
                  </a>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={5}>
              <div className="prices__content mob-pt">
                <span>Студенческий</span>
                <h2>20 000 ₸</h2>
                <p>
                  Стандартная консультация со скидкой для студентов
                  (бакалавров*).
                </p>
                <ul>
                  <li>
                    <img src={icon} alt="check" />
                    Консультация (45 мин)
                  </li>
                  <li>
                    <img src={icon} alt="check" />
                    Email поддержка (1 неделя)
                  </li>
                </ul>
                <div>
                  <a
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="appoint"
                  >
                    Записаться
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className={showButton ? "fixedButton activeButton" : "fixedButton"}
      >
        Записаться на консультацию
      </a>
    </>
  );
};

export default Content;
