import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotrom from "./Jumbotrom";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const data = [
  {
    title: "Lorem ",
    comentario: "Llorem ipsum",
    img: rigoImage,
    button: "Leer más",
  },
  {
    title: "Lorem ",
    comentario: "Llorem ipsum",
    img: rigoImage,
    button: "Leer más",
  },
  {
    title: "Lorem ",
    comentario: "Llorem ipsum",
    img: rigoImage,
    button: "Leer más",
  },
  {
    title: "Lorem ",
    comentario: "Llorem ipsum",
    img: rigoImage,
    button: "Leer más",
  },
];

const Home = () => {
  let info = [];
  for (let item of data) {
    const card = (
      <div className=" col-lg-3 col-md-6">
        <Card
          title={item.title}
          comentario={item.comentario}
          img={item.img}
          button={item.button}
        />
      </div>
    );
    info.push(card);
  }
  return (
    <>
      <Navbar />
      <div className="container" style={{ padddingTop: "20px" }}>
        <Jumbotrom />
        <div
          className="row"
          style={{ paddingBottom: "30px", paddingTop: "20px" }}
        >
          {info}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
