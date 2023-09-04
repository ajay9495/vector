import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './HeroMobile.module.css';
import Header from '../Header/Header';
import HeroMobileLogic from './HeroMobileLogic';

export default function HeroMobile() {

    const {Events} = HeroMobileLogic();

  return (
    <Col  globalStyles={'bo '} localStyles={styles.mainWrapper} >
        <Header />
        <Col  globalStyles={'bo cy-center g-5  m-4'} localStyles={styles.innerWrapper} >
            <Col  globalStyles={'bo w-8'} localStyles={styles.title} >
                We are creative agency
            </Col>
            <Row  globalStyles={'bo ry-center'} localStyles={styles.btnWrapper} onClick={Events.goTo} >
                <Box  globalStyles={'bo'} localStyles={styles.btnText} >
                    GET STARTED NOW
                </Box>
            </Row>
        </Col>
    </Col>
  );
}