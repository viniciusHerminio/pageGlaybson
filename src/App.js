import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import matutoPremios from './patrocinadores/matutoPremios.jpeg'
import doispra1000 from './patrocinadores/2pra1000.jpeg'
import amorECor from './patrocinadores/amorECor.jpeg'
import belaModas from './patrocinadores/belaModas.jpeg'
import bergDybala from './patrocinadores/bergDybala.jpeg'
import britoCell from './patrocinadores/britoCell.jpeg'
import RF from './patrocinadores/RF.jpeg'

function App() {

  const responsive = {
    0: { items: 7 },
    1024: { items: 7 },
};
  const items = [
    <img src={ matutoPremios } alt="presentation" className="patrocinio" />,
    <img src={ doispra1000 } alt="presentation" className="patrocinio" />,
    <img src={ amorECor } alt="presentation" className="patrocinio" />,
    <img src={ belaModas } alt="presentation" className="patrocinio" />,
    <img src={ bergDybala } alt="presentation" className="patrocinio" />,
    <img src={ britoCell } alt="presentation" className="patrocinio" />,
    <img src={ RF } alt="presentation" className="patrocinio" />,
  ];
  return (
    <div className="App">
      <header className="App-header mb-5">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <footer>
        <div className='d-flex justify-content-evenly mt-5'>
      <div className='d-flex flex-column justify-content-evenly mt-5'>
        <a className='titleLocalizacao' href="https://www.google.com.br/maps/place/8°22'19.7%22S+36°42'27.0%22W/@-8.372146,-36.707502,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-8.372146!4d-36.707502">
        <p>Localização 1º Dia</p>
        <p>Casarão</p>
        </a>
      </div>
      <div className='d-flex flex-column justify-content-evenly mt-5'>
      <a className='titleLocalizacao' href="https://goo.gl/maps/DmNPhiGdLvzSZJ6L6">
        <p>Localização 2º Dia</p>
        <p>Piscina de Gilvanio</p>
        </a>
      </div>
      </div>
        <div className='titlePatrocinadores'>
        <p className='patrocinadoresTitle'>Patrocinadores</p>
      </div>
        <AliceCarousel
        items={items}
        responsive={responsive}
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1000}
        infinite
        disableButtonsControls
        disableDotsControls
        />
      </footer>
      </div>
  );
}

export default App;
