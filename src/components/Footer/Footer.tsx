import React from 'react';
import './Footer.scss';
import { Link as Scroll } from 'react-scroll';
import { Container, Row } from 'react-bootstrap';

const Footer:React.FC = () => {

  return (
    <footer>
        <Container>
            <Row className="align-items-center justify-content-between flex-col">
                <div>
                    © 2021 All rights reserved 
                </div>
                <ul>
                    <li className="pr-4">
                        <Scroll to='consultation' smooth={true}>
                            Про меня
                        </Scroll>
                    </li>
                    <li>
                        <Scroll to='prices' smooth={true}>
                            Планы и тарифы
                        </Scroll>
                    </li>
                </ul>
                <Scroll to='main' smooth={true} className="ontop">
                    На вверх
                </Scroll>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;