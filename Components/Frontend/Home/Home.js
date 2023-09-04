
import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Home.module.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import HeroMobile from './HeroMobile/HeroMobile';
import About from './About/About';
import Highlights from './Highlights/Highlights';
import Work from './Work/Work';
import Footer from  './Footer/Footer'
import Modal from './Modal/Modal';
import HomeLogic from './HomeLogic';
import Agency from './Agency/Agency';
import ServiceExpand from './ServiceExpand/ServiceExpand';
import Services from './Services/Services';
import Offer from './Offer/Offer';

import { Poppins } from 'next/font/google'
import FloatingHeader from '../FloatingHeader/FloatingHeader';

const roboto = Poppins({ 
  subsets: ['latin'],
  weight: '400'
});
 

export default function Home() {

  const {ServiceExpandState, IsModalVisible, ScrollDirection, Events} = HomeLogic();

  return ( 

    <div>
      {(ServiceExpandState.isVisible)&& <ServiceExpand data={ServiceExpandState.data} Events={Events} />}
      {(IsModalVisible)&& <Modal Events={Events} />}
      <FloatingHeader ScrollDirection={ScrollDirection} />
      <div className={`${styles.mainWrapper}   ${roboto.className}`}  onScroll={Events.scrollFunction} >
        
        <Hero />
        <HeroMobile />
        <Highlights />
        <About />
        <Work Events={Events} />
        <Services />
        <Offer />
        <Agency />
        <Footer />
      </div>
    </div>
  );
}