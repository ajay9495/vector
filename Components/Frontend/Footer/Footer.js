import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Footer.module.css';
import { FaBeer } from 'react-icons/fa';
// import { FaBeer } from 'react-icons/fa';

export default function Footer() {
  return (
    <Col  globalStyles={'bo g-3'} localStyles={styles.mainWrapper}  >
      <Row  globalStyles={'b w-fit txt-bold-m'}  >
        Follow Us
      </Row>
      <Row  globalStyles={'b w-fit'}  >
        <FaBeer fontSize={'1.5rem'}/>
      </Row>
    </Col>
  );
}