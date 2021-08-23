import React from 'react';
import pictureRai from '../../assets/images/raykhan.jpg';
import ContentR from '../Content-Raikhan/ContentR';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const LayoutRaikhan:React.FC = () => {
  return (
    <>
      <div id='main'></div>
      <Navbar backgroundImage = {pictureRai}/>
        <main>
          <ContentR />
        </main>
      <Footer />
    </>
  );
}

export default LayoutRaikhan;