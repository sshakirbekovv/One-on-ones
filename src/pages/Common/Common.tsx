import React, { useEffect } from "react";
import "./Common.scss";
import Aos from "aos";
import { Container, Row } from "react-bootstrap";
import Card from "../../components/Card/Card";
import { CommonItems } from "./CommonItems/CommonItems";
import { CommonItem } from "../../types/content.type";

const Common: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="common" data-aos="fade-in">
      <Container>
        <h1 className="common__title">Личные консультации</h1>
        <Row className="d-flex flex-column justify-content-between align-items-center ">
          {CommonItems.map((commonitem: CommonItem) => (
            <Card carditem={commonitem} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Common;
