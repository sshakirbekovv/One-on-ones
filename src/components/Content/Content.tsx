import React, { useEffect, useState } from 'react';
import './Content.scss';
import Aos from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import photo from '../../assets/images/naz_back.png';
import icon from '../../assets/images/icon-check.svg';

const Content:React.FC = () => {

    const [showButton, setShowButton]  = useState(false);

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
    
    window.addEventListener('scroll', checkScrollButton);

  return (
    <>
    <section className="consultation" data-aos='fade-in' id='consultation'>
    <Container>
      <Row className="align-items-center justify-content-between">
      <Col xl={5} lg={6} className="order-mobile-1">
        <div className="consultation__info">
              <h1>Консультации от Назерке</h1>
              <ul>
                <li>– Основатель стартапа L’accent</li>
                <li>– Бывший программист Гугла и аналитик венчурных инвестиций</li>
              </ul>
              <div>
              <a 
                href="https://calendly.com/nazerke/"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Записаться на консультацию
              </a>
              </div>
        </div>
        </Col>
        <Col xl={5} lg={6} sm={12} className="order-mobile-0">
        <div className="consultation__photo">
          <img src={photo} alt="nazerke" className="img-fluid"/>
        </div>
        </Col>
       </Row>
    </Container>
    </section>
    <section className="experience" data-aos='fade-in' id='experience'>
    <Container>
        <div className="experience__content">
          <h1 className="pb-3">Experience</h1>
          <ul>
            <li>Ранее прошла на </li>
            <li>- программу Google CodeU, London UK 2015</li>
            <li>- хакатон от Booking.com в качестве одного из победителей соревнования по программированию (Booking WomenInTech Contest - 6th/1000+, Amsterdam, Netherlands 2016)</li>
            <li>- крупнейшую в мире конференцию для девушек в IT - Grace Hopper Celebration of Women in Computing(GHC)</li>
            <li>&nbsp;• в качестве стипендиата от американской организации Anita Borg (организаторы GHC) - Orlando, FL, USA 2017</li>
          </ul>
          <ul>
            <li>Научная работа:</li>
            <li>Опубликовала 4 научные статьи и выступила с ними в Сингапуре, Японии и США (Чикаго)</li>
            <li>- ICRA (International Conference in Robotics and Automation)</li>
            <li>- ICSR (International Conference in Social Robotics)</li>
            <li>- HRI (International Conference in Human-Robot Interaction)</li>
          </ul>
          <ul>
            <li>Образование:</li>
            <li>
                РФМШ им Жаутыкова, выпуск 2013<br />
                • призёр и победитель республиканских и международных олимпиад по программированию 
            </li>
            <li>
                Назарбаев Университет, выпуск 2018<br />
                • степень бакалавра компьютерных наук [BS in Computer Science] 
            </li>
            <li>
                Московский Физико-Технический Институт<br />
                • магистратура по специальности «Искусственный Интеллект»
            </li>
          </ul>
        </div>
    </Container>
    </section>
    <section className="prices" data-aos='fade-in' id='prices'>
    <Container>
      <h1>Планы и Тарифы</h1>
      <span className="plan">Выберите подходящий себе план</span>
      <Row className="align-items-center justify-content-center pt-5 mt-5">
          <Col xl={4} lg={5}> 
              <div className="prices__content">
                  <span>Стандартный</span>
                  <h2>25 000 ₸</h2>
                  <p>
                  Если вы студент / специалист, только начинающий поиск карьерного пути, либо уже имеющий конкретную цель (подготовка к job interview, коррекция имеющегося резюме, планирование следующих карьерных шагов), то этот тариф для вас. <br />
                  На консультации мы разберём одну интересующую вас тему (примеры: как правильно искать стажировки/работу/программы/стипендии, как подходить к смене карьерного трека, подготовка к интервью, обратная связь по резюме). На консультации мы подробно разберём вашу цель и спланируем следующие шаги.
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
                    href="https://calendly.com/nazerke/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    id='appoint'
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
                  Стандартная консультация со скидкой для студентов (бакалавров*). 
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
                    href="https://calendly.com/nazerke/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    id='appoint'
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
      href="https://calendly.com/nazerke/"
      target="_blank" 
      rel="noopener noreferrer"
      className={showButton ? "fixedButton activeButton" : "fixedButton"}
    >
      Записаться на консультацию
    </a>
    </>
  );
}

export default Content;