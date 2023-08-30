import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Row  globalStyles={'bo px-5 py-3 txt-grey '} localStyles={styles.mainWrapper} >
        Admin Pannel
    </Row>
  );
}