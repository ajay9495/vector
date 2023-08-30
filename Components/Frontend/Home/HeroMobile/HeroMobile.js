import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './HeroMobile.module.css';
import Header from '../Header/Header';

export default function HeroMobile() {
  return (
    <Col  globalStyles={'bo '} localStyles={styles.mainWrapper} >
        <Header />
        <Col  globalStyles={'bo cy-center g-5  m-4'} localStyles={styles.innerWrapper} >
            <Col  globalStyles={'bo w-6'} localStyles={styles.title} >
                We are creative agency
            </Col>
            <Row  globalStyles={'bo ry-center'} localStyles={styles.btnWrapper} >
                <Box  globalStyles={'bo'} localStyles={styles.btnText} >
                    GET STARTED NOW
                </Box>
            </Row>
        </Col>
    </Col>
  );
}