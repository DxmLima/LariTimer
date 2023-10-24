import React, { Component } from 'react';
import './Timer.css'; // Importe o arquivo CSS
import Lari from './Lari';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isTimeUp: false, // Adicionamos uma flag para indicar que o tempo acabou
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTime = () => {
    const targetDate = new Date('2023-10-25 23:59:59'); // Substitua esta data pela data desejada
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(this.interval);
      this.setState({ isTimeUp: true }); // Definimos a flag para true quando o tempo acabar
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60) / 1000));

    this.setState({ days, hours, minutes, seconds });
  };

  render() {
    const { days, hours, minutes, seconds, isTimeUp } = this.state;
    return (
      <div className="timer-container text-red-600 p-24 text-2xl sm:text-5xl ">
        {!isTimeUp ? ( // Verifica se o tempo não acabou
          <>
            <span className='text-white font-black p-2'>{days}</span> Dias&nbsp;
            <span className='text-white font-black p-2'>{hours}</span> Horas&nbsp;
            <span className='text-white font-black p-2'>{minutes}</span> Minutos&nbsp;
            <span className='text-white font-black p-2'>{seconds}</span> Segundos
          </>
        ) : (
          <div className='text-white font-bold text-5xl'>
            <Lari />
          </div>
        )}
      </div>
    );
  }
}

export default Timer;
