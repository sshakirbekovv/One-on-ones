import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CommonItem } from "../../types/content.type";
import "./Card.scss";

const Card: React.FC<{
  carditem: CommonItem;
}> = ({ carditem }) => {
  return (
    <Col xl={6} md={12}>
      <Link to={carditem.link}>
        <div className="card">
          <div className="card__header d-flex align-items-center">
            <div
              className="card__header-img mr-3"
              style={{ background: `url(${carditem.photo}) no-repeat center/cover` }}
            ></div>
            <div className="d-flex flex-column">
              <span className="name">{carditem.name}</span>
              <span className="speciality">{carditem.special}</span>
            </div>
          </div>
          <div className="card__body pt-4">
            <ul className="card__body-list">
              <li>
                <i className={carditem.iconfirst}></i>
                <span>{carditem.listfirst}</span>
              </li>
              <li>
                <i className={carditem.iconsecond}></i>
                <span>{carditem.listsecond}</span>
              </li>
              <li>
                <i className="far fa-handshake"></i>
                <div>Записаться на консультацию</div>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default Card;
