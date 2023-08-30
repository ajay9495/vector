import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Header.module.css';

export default function Header() {
  return (
    <Row  globalStyles={'bo rx-end py-2 px-5'} localStyles={styles.mainWrapper} >
        <Box  globalStyles={'bo btn-admin-secondary'}  >
          Logout
        </Box>
    </Row>
  );
}