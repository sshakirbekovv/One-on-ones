import React from 'react';
import pictureNaz from '../../assets/images/nazerke.jpg';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const LayoutNazerke:React.FC = () => {
  return (
    <>
      <div id='main'></div>
      <Navbar backgroundImage = {pictureNaz}/>
        <main>
          <Content />
        </main>
      <Footer />
    </>
  );
}

export default LayoutNazerke;
