import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotrom from "./Jumbotrom";
import Footer from "./Footer";

//include images into your bundle
import bass from "../../img/bass.jpg";
import corno from "../../img/corno.jpg";
import piano from "../../img/piano.jpeg";
import violin from "../../img/violin.jpg";




//create your first component

const data = [
  {
    title: "Bajo",
    comentario: "El bajo (o bajo eléctrico) es un instrumento de cuerda, similar en forma a la guitarra eléctrica, pero con un sonido más grave y profundo. Es fundamental en la música moderna porque marca la base rítmica y armónica de una canción.",
    img: bass,
    button: "Leer más",
  },
  {
    title: "Corno ",
    comentario: "El corno francés es un instrumento de viento metal con un sonido cálido y redondo. Tiene un tubo largo y enrollado, y se toca soplando a través de una boquilla mientras se usan los dedos para cambiar las notas. Es muy usado en orquestas.",
    img: corno,
    button: "Leer más",
  },
  {
    title: "Piano ",
    comentario: "El piano es un instrumento de teclado que produce sonidos al golpear cuerdas internas con martillos pequeños. Es muy versátil y permite tocar melodías, armonías y ritmos a la vez. Es clave en muchos géneros musicales.",
    img: piano,
    button: "Leer más",
  },
  {
    title: "Violin ",
    comentario: "El violín es un instrumento de cuerda frotada, el más pequeño y agudo de su familia (violín, viola, violonchelo y contrabajo). Se toca frotando un arco con cerdas sobre sus cuerdas, aunque también se puede tocar con los dedos (técnica llamada pizzicato).",
    img: violin,
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
      <div className="container">
        <Jumbotrom />
        <div
          className="row"
        
        >
          {info}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
