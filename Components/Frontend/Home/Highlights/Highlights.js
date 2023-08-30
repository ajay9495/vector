import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Highlights.module.css'
import Image from 'next/image';
import highlights1 from '../../../../Assets/Images/highlights1.webp'
import highlights2 from '../../../../Assets/Images/highlights2.webp'
import highlights3 from '../../../../Assets/Images/highlights3.webp'
import highlights4 from '../../../../Assets/Images/highlights4.webp'
import HighlightsLogic from './HighlightsLogic';

export default function Highlights() {

  const {Data} = HighlightsLogic();

  return (
    <Col id={'highlightsWrapper'} globalStyles={'bo cx-center'} localStyles={styles.mainWrapper} >
        <Row  globalStyles={'bo g-3 ry-center'} localStyles={styles.scrollWrapper} >
          <Box  globalStyles={'bo'} localStyles={styles.line} >
          </Box>
          <Box  globalStyles={'bo'}  >
            scroll
          </Box>
        </Row>
        <Row  globalStyles={'bo w-9 w-12-s rx-space-between'} localStyles={styles.contentWrapper}  >
          <Col  globalStyles={'bo w-12-s g-3 cx-center'} localStyles={`${styles.item} ${(Data.Highlights1State)? styles.itemActive : '' } `}  >
            <Box  globalStyles={'bo'}  >
              <Image src={highlights1} alt='highlights' className={styles.image} />
            </Box>
            <Box  globalStyles={'bo '} localStyles={styles.text} >
              GOOD DESIGN
            </Box>
          </Col>
          <Col  globalStyles={'bo w-12-s g-3 cx-center'}  localStyles={`${styles.item} ${(Data.Highlights2State)? styles.itemActive : '' } `}  >
            <Box  globalStyles={'bo'}  >
              <Image src={highlights2} alt='highlights' className={styles.image} />
            </Box>
            <Box  globalStyles={'bo'}  localStyles={styles.text} >
              INSPIRING IDEAS
            </Box>
          </Col>
          <Col  globalStyles={'bo w-12-s g-3 cx-center'}  localStyles={`${styles.item} ${(Data.Highlights3State)? styles.itemActive : '' } `}  >
            <Box  globalStyles={'bo'}  >
              <Image src={highlights3} alt='highlights' className={styles.image} />
            </Box>
            <Box  globalStyles={'bo'}  localStyles={styles.text} >
              INOVATIVE CODE
            </Box>
          </Col>
          <Col  globalStyles={'bo w-12-s g-3 cx-center'}  localStyles={`${styles.item} ${(Data.Highlights4State)? styles.itemActive : '' } `}  >
            <Box  globalStyles={'bo'}  >
              <Image src={highlights4} alt='highlights' className={styles.image} />
            </Box>
            <Box  globalStyles={'bo'}  localStyles={styles.text} >
              BEST QUALITY
            </Box>
          </Col>

        </Row>
    </Col>
  );
}