import React, { useState, useEffect } from 'react';

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});
  const [chegou, setChegou] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();
      const destino = new Date(targetDate);
      const diferenca = destino - agora;

      if (diferenca <= 0) {
        setChegou(true);
        clearInterval(interval);
      } else {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        setTimeLeft({ dias, horas, minutos, segundos });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="contador">
      {chegou ? (
        <h2 className="mensagem-final">🎓 Parabéns, chegou o grande dia da nossa formatura!</h2>
      ) : (
        <h2>
          Faltam {timeLeft.dias} dias, {timeLeft.horas} horas, {timeLeft.minutos} minutos e {timeLeft.segundos} segundos
        </h2>
      )}
    </div>
  );
}

export default Countdown;