import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Agency.module.css';
import AgencyLogic from './AgencyLogic';

export default function Agency() {

    const {Events, Data}  = AgencyLogic();

  return (
    <Row id={'agencyWrapper'} globalStyles={'bo rx-center'} localStyles={styles.mainWrapper} >
        <Row  globalStyles={'bo w-12 rx-center'} localStyles={styles.overlay}  >
            <Row  globalStyles={'bo w-12 ry-center rx-space-between'} localStyles={styles.innerWrapper} >
                <Col  globalStyles={'bo w-12-s cx-center-s'}   localStyles={`${styles.title} ${(Data.ItemOneState)? styles.titleActive : '' } `}   >
                    Agency
                </Col>
                <Col  globalStyles={'bo w-4 w-12-s cx-center'}   localStyles={`${styles.subtitle} ${(Data.ItemTwoState)? styles.subtitleActive : '' } `}   >
                    Express your creativity and start building your design
                </Col>
                <Col  globalStyles={'bo w-12-s cx-center-s'} localStyles={`${styles.buttonWrapper} ${(Data.ItemThreeState)? styles.buttonWrapperActive : '' } `} >
                    <Box  globalStyles={'bo w-fit  btn-primary'} onClick={Events.goTo}  >
                        START A PROJECT
                    </Box>
                </Col>
            </Row>
        </Row>

    </Row>
  );
}