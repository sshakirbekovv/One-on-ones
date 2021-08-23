import React, { useEffect } from 'react';
import './Common.scss';
import Aos from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Common:React.FC = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
     }, []);


  return (
    <section className="common" data-aos='fade-in'>
        <Container>
            <h1 className="common__title">Личные консультации</h1>
            <Row className="d-flex flex-column justify-content-between align-items-center ">
                <Col xl={6} md={12}>
                    <Link to='/nazerke'>
                        <div className="card">
                            <div className="card__header d-flex align-items-center">
                                <div className="card__header-img mr-3"></div>
                                <div className="d-flex flex-column">
                                    <span className="name">Назерке Калидолда</span>
                                    <span className="speciality">L’accent, Google</span>
                                </div>
                            </div>
                            <div className="card__body pt-4">
                                <ul className="card__body-list">
                                    <li>
                                        <i className="far fa-building"></i>
                                       <span>
                                            Основатель стартапа L’accent
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fab fa-google"></i>
                                       <span>
                                            Бывший программист Гугла
                                        </span>
                                    </li>
                                    <li>
                                        <i className="far fa-handshake"></i>
                                        <div>
                                            Записаться на консультацию
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </Col >
                <Col xl={6} md={12}>
                    <Link to='/raikhan'>
                    <div className="card">
                            <div className="card__header d-flex align-items-center">
                                <div className="card__header-img mr-3 raikhan"></div>
                                <div className="d-flex flex-column">
                                    <span className="name">Райхан Хасенова</span>
                                    <span className="speciality">Facebook</span>
                                </div>
                            </div>
                            <div className="card__body pt-4">
                                <ul className="card__body-list">
                                    <li>
                                        <i className="fab fa-facebook"></i>
                                       <span>
                                            Программист в Фейсбуке в Лондоне
                                        </span>
                                    </li>
                                    <li>
                                        <i className="far fa-university"></i>
                                       <span>
                                            Выпускник Назарбаев Университета
                                        </span>
                                    </li>
                                    <li>
                                        <i className="far fa-handshake"></i>
                                        <div>
                                            Записаться на консультацию
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>   
    </section>
  );
}

export default Common;