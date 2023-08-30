import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import FloatingHeaderLogic from './FloatingHeaderLogic.js'
import styles from './FloatingHeader.module.css';

export default function FloatingHeader() {

    const {States} = FloatingHeaderLogic()

  return (
    <Col  globalStyles={'b p-5'} localStyles={`${styles.mainWrapper} ${(States.HeaderStateActive)? styles.bottomState : styles.topState }`} >
        hello FloatingHeader
    </Col>
  );
}
