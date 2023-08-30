import Image from 'next/image';
import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Services.module.css';
import serviceImage from '../../../../Assets/Images/agencyImage.webp'
import highlights1 from '../../../../Assets/Images/highlights1.webp'
import ServicesLogic from './ServicesLogic';

export default function Services() {


  const {States} = ServicesLogic();

  return (
    <Col id={'servicesWrapper'} globalStyles={'bo cx-center pt-section '} localStyles={styles.mainWrapper} >
        <Row  globalStyles={'bo w-9 w-10-s ry-center'}  >
          <Col id={'left'} globalStyles={'bo w-6 w-12-s cx-center'}  >
            <Col  globalStyles={'bo w-11 w-12-s'} localStyles={styles.imageWrapper} >
              <Image src={serviceImage} alt='image' className={styles.image} />
            </Col>
          </Col>
          <Col id={'right'} globalStyles={'bo w-6 w-12-s mt-5-s cx-center'}  >
            <Col id={'contentWrapper'} globalStyles={'bo w-8 w-12-s g-5 cx-center-s'}  >
              <Box id={'title'} globalStyles={'bo w-12-s'} localStyles={styles.contentTitle} >
                Browse amazing design services!
              </Box>
              <Row  globalStyles={'bo  ry-center  g-5 f-nowrap f-wrap-s'} localStyles={`${styles.items} ${(States.ItemOneState)? styles.itemsActive : '' }`} >
                <Col  globalStyles={'bo w-12-s cx-center-s'} >
                  <Col  globalStyles={'bo cx-center cy-center'}  localStyles={styles.iconWrapper} >
                    <Image src={highlights1} alt='icon' className={styles.icon} />
                  </Col>
                </Col>
                <Col  globalStyles={'bo g-2 w-12-s cx-center-s'}  >
                    <Box  globalStyles={'bo txt-bold-m'} localStyles={styles.subtitle} >
                    Powerfull options
                    </Box>
                    <Box  globalStyles={'bo txt-grey'} localStyles={styles.content} >
                      Lorem ipsum dolor consectet eiusmod tempor incididunt
                    </Box>
                </Col>
              </Row>
              <Row  globalStyles={'bo  ry-center  g-5 f-nowrap f-wrap-s'} localStyles={`${styles.items} ${(States.ItemTwoState)? styles.itemsActive : '' }`} >
                <Col  globalStyles={'bo w-12-s cx-center-s'} >
                  <Col  globalStyles={'bo cx-center cy-center'}  localStyles={styles.iconWrapper} >
                    <Image src={highlights1} alt='icon' className={styles.icon} />
                  </Col>
                </Col>
                <Col  globalStyles={'bo g-2 w-12-s cx-center-s'}  >
                    <Box  globalStyles={'bo txt-bold-m'} localStyles={styles.subtitle} >
                    Powerfull options
                    </Box>
                    <Box  globalStyles={'bo txt-grey'} localStyles={styles.content} >
                      Lorem ipsum dolor consectet eiusmod tempor incididunt
                    </Box>
                </Col>
              </Row>
              <Row  globalStyles={'bo  ry-center  g-5 f-nowrap f-wrap-s'} localStyles={`${styles.items} ${(States.ItemThreeState)? styles.itemsActive : '' }`} >
                <Col  globalStyles={'bo w-12-s cx-center-s'} >
                  <Col  globalStyles={'bo cx-center cy-center'}  localStyles={styles.iconWrapper} >
                    <Image src={highlights1} alt='icon' className={styles.icon} />
                  </Col>
                </Col>
                <Col  globalStyles={'bo g-2 w-12-s cx-center-s'}  >
                    <Box  globalStyles={'bo txt-bold-m'} localStyles={styles.subtitle} >
                    Powerfull options
                    </Box>
                    <Box  globalStyles={'bo txt-grey'} localStyles={styles.content} >
                      Lorem ipsum dolor consectet eiusmod tempor incididunt
                    </Box>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
    </Col>
  );
}