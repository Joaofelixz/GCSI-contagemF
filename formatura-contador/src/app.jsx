import React from 'react';
import Countdown from './Countdown';
import Slider from 'react-slick';
import '../src/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const imagens = [
    '/Imagem1.jpg',
    '/Imagem3.jpg',
    '/Imagem4.jpg'
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  };

  return (
    <div className="app">
      <Slider {...settings} className="carrossel">
        {imagens.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Foto ${index + 1}`} className="fundo" />
          </div>
        ))}
      </Slider>

      <div className="caixa">
        <h1>João Gabriel Felix – Turma 6ºA</h1>
        <Countdown targetDate="2025-12-15T23:59:00" />
        <p className="mensagem">ESTÁ ACABANDO UM CICLO</p>
      </div>
    </div>
  );
}

export default App;