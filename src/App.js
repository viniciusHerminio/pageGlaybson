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
import botao from './botão.png'
import oticasMadrid from './patrocinadores/oticasMadrid.jpeg'
import deliciasDoRancho from './patrocinadores/deliciasDoRancho.jpeg'

function App() {

  const responsive = {
    0: { items: 3 },
    1024: { items: 7 },
};
  function redirectPage (e) {
    window.location.href = `https://instagram.com/${e.target.alt}?igshid=YmMyMTA2M2Y=`;
  };
  function redirectPageMatuto (e) {
    window.location.href = `https://rifa.digital/s/iphone-11-ou-1500-no-pix-matuto-premios790`;
  };
  
  const items = [
    <img src={ matutoPremios } alt="matutopremiosoficial" className="patrocinio" onClick={ redirectPageMatuto } />,
    <img src={ doispra1000 } alt="presentation" className="patrocinio" />,
    <img src={ amorECor } alt="amorecorfestasedecoracoes" className="patrocinio" onClick={ redirectPage } />,
    <img src={ belaModas } alt="modas4656" className="patrocinio" onClick={ redirectPage } />,
    <img src={ bergDybala } alt="bergdybala" className="patrocinio" onClick={ redirectPage } />,
    <img src={ britoCell } alt="britocellpesqueira" name="meuNome" className="patrocinio" onClick={ redirectPage } />,
    <img src={ RF } alt="rf_bolos.dofc" className="patrocinio" onClick={ redirectPage } />,
    <img src={ oticasMadrid } alt="oticamadrid" className="patrocinio" onClick={ redirectPage } />,
    <img src={ deliciasDoRancho } alt="deliciasdorancho4" className="patrocinio" onClick={ redirectPage } />
  ];

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div className='quadroFundo'>
        <h4 className='casarao mt-4'>Cores de look: Fúcsia/Roxo ou Branco</h4>
        <h4 className='casarao mt-1'>Horário: A partir das 18:00h</h4>
        <h4 className='casarao mt-1'>Haverá bar no local</h4>
        <h2 className='casarao mt-1'>Open Food</h2>
        </div>
      </header>
      <footer>
        <div className='d-flex justify-content-evenly'>
      <div className='titleLocalizacao d-flex flex-column justify-content-evenly'>
        <a href="https://maps.app.goo.gl/h6GBkiebphVXQzi27?g_st=iwb">
        <p className='casarao'>Localização 1º Dia</p>
        <div className='botao'>
          <img src={botao} alt='botao' />
        </div>
        <p className='casarao'>Casarão</p>
        </a>
        <h3 className='mt-3'>Atrações dia <br></br> 15/04 </h3>
        <ul>
          <li>Dj Pedro Humberto</li>
          <li>Andreza Queiroz</li>
          <li>Andreza Almeida</li>
        </ul>
      </div>
      <div className='titleLocalizacao d-flex flex-column justify-content-evenly'>
      <a href="https://goo.gl/maps/DmNPhiGdLvzSZJ6L6">
        <p className='casarao'>Localização 2º Dia</p>
        <div className='botao'>
          <img src={botao} alt='botao' />
        </div>
        <p className='casarao'>Piscina de Gilvanio</p>
        </a>
        <h3 className='mt-3'>Atrações dia <br></br> 16/04</h3>
        <ul className='m-3'>
          <li>Jailson Paixão</li>
          <li>Paredão 2 para 1000</li>
        </ul>
      </div>
      </div>
      <div className='quadroPatrocinadores'>
         <div className='titlePatrocinadores'>
        <p className='patrocinadoresTitle'>Patrocinadores</p>
      </div>
        <AliceCarousel
        items={items}
        responsive={responsive}
        autoPlay
        autoPlayInterval={3000}
        animationDuration={1000}
        infinite
        disableButtonsControls
        disableDotsControls
        />
        </div>
      </footer>
      </div>
  );
}

export default App;
