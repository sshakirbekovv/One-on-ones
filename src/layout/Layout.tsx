import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import pictureNaz from "../images/nazerke.jpg";
import pictureRai from "../images/raykhan.jpg";
import pictureAliya from "../images/aliya.jpg";
import { getContentAliya, getContentNazerke, getContentRaikhan } from "../api/content.api";
import Content from "../pages/Content/Content";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ContentInfo } from "../types/content.type";

const LayoutNazerke: React.FC = () => {
  const [picture, setPicture] = useState<string>("");
  const loc = useLocation();
  const [infromation, setInfromation] = useState<ContentInfo[]>([]);

  useEffect(() => {
    switch (loc.pathname) {
      case "/nazerke":
        setPicture(pictureNaz);
        getContentNazerke()
        .then(res => setInfromation(res.data));
      break;
      case "/raikhan":
        setPicture(pictureRai);
        getContentRaikhan()
        .then(res => setInfromation(res.data));
      break;
      case "/aliya":
        setPicture(pictureAliya);
        getContentAliya()
        .then(res => setInfromation(res.data));
      break;        
    }
  }, [loc]);

  return (
    <>
      <div id="main"></div>
      <Navbar backgroundImage={picture} />
      <main>
        {infromation.map((data: ContentInfo) => (
          <Content photo={picture} props={data} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default LayoutNazerke;
