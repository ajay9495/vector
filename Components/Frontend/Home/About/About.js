import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './About.module.css';

export default function About() {
  return (
    <Row id={'about'}  globalStyles={'bo rx-center'} localStyles={styles.mainWrapper} >
        <Row  globalStyles={'bo w-10 w-11-s'} localStyles={styles.innerWrapper} >
          <Row  globalStyles={'bo w-4 w-12-s  p-5 p-4-s ry-end rx-center'} localStyles={styles.hello} >
            hello<span style={{color:'#000'}}>.</span>
          </Row>
          <Col  globalStyles={'bo w-4 w-12-s p-5 p-4-s  cy-end cx-center'} localStyles={styles.title}  >
            Award winning agency specialising 
            in creative design
          </Col>
          <Col  globalStyles={'bo w-4 w-12-s p-5 p-4-s cy-end cx-center'}  localStyles={styles.description}  >
            25 years we have created designs 
            for global brands.Creating success stories accross the globe
          </Col>
        </Row>
    </Row>
  );
}