
import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Hero.module.css';
import Header from '../Header/Header';
import { ST } from 'next/dist/shared/lib/utils';
import HeroLogic from './HeroLogic';

export default function Hero() {

  const {Events} = HeroLogic();

  return (  
    <div className={styles.hero}>
        <div className={styles.foreground}>
            <Header />
            <Row  globalStyles={'bo w-12 rx-center'} localStyles={styles.innerWrapper} >
                <Col  globalStyles={'bo w-9 g-5 cy-center'}  >
                  <Col  globalStyles={'bo w-4'} localStyles={styles.title} >
                    We are creative agency
                  </Col>
                  <Row  globalStyles={'bo ry-center mt-3'} localStyles={styles.btnWrapper} onClick={Events.goTo}>
                    <Box  globalStyles={'bo'} localStyles={styles.btnText} >
                      GET STARTED NOW
                    </Box>
                  </Row>
                </Col>
            </Row>
        </div>
        <div  className={styles.background}>
        </div> 
    </div>
  );
}