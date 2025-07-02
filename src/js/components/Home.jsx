import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import rigoImage from "../../img/rigo-baby.jpg";
import rigoImage from "../../img/rigo-baby.jpg";
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const data = [
  {
    title: "Lorem ",
    comentario: "Llorem ipsum",
    img: lorem,
    button: "Leer más",
  },
  {
    title: "Lorem ",
    comentario: "Llorem ipsum",
    img: lorem,
    button: "Leer más",
  },
  {
    title: "Lorem ",
    comentario: "Llorem ipsum",
    img: lorem,
    button: "Leer más",
  },
  {
    title: "Lorem ",
    comentario: "Llorem ipsum",
    img: lorem,
    button: "Leer más",
  },
];

const Home = () => {
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
  }
  return (
    <>
      <Navbar />
      <div className="container" style={{ padddingTop: "20px" }}>
        <Jumbotron />
        <div
          className="row"style={{ paddingBottom: "30px", paddingTop: "20px" }}
        >
          {info}
        </div>
      </div>
	  <Footer/>
    </>
  );
};

export default Home;
