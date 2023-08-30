import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Offer.module.css';
import Image from 'next/image';
import offerImage from '../../../../Assets/Images/offerImage.webp'
import quotesLeft from '../../../../Assets/Images/quotesLeft.webp'
import quotesRight from '../../../../Assets/Images/quotesRight.webp'
import OfferLogic from './OfferLogic';

export default function Offer() {

  const {States} = OfferLogic();

  return (
    <Col id={'offerInnerWrapper'} globalStyles={'bo cx-center pt-section pb-section'} localStyles={styles.mainWrapper} >
        <Row id={'innerWrapper'} globalStyles={'bo w-9 w-10 g-5-s rx-center ry-center' } localStyles={styles.innerWrapper} >
          <Col id={'sectionOne'} globalStyles={'bo w-2 w-12-s'}  >
            <Col  globalStyles={'bo cx-end cx-center-s g-3 g-0-s '} localStyles={`${styles.leftTextWrapper} ${(States.TextActive)? styles.leftTextWrapperActive : '' }` } >
              <Box  globalStyles={'bo'}  >
                <Image src={quotesLeft} alt={'quotes'} className={styles.quotes} />
              </Box>
              <Box  globalStyles={'bo   '} localStyles={styles.leftText} >
                  We offers perfect hiring 
                  models for your project 
                  requirements
              </Box>
            </Col>
          </Col>
          <Col  id={'sectionTwo'}  globalStyles={'bo w-6 w-12-s cx-center'}  >
            <Col  globalStyles={'bo w-12'}  >
              <Image src={offerImage} alt='offerImage' className={`${styles.image} ${(States.ImageActive)? styles.imageAppear : '' }`}  />
            </Col>
          </Col>
          <Col  id={'sectionThree'}  globalStyles={'bo w-2 w-12-s mt-5-s'}  >
            <Col  globalStyles={'bo cx-start cx-center-s  g-3 g-0-s'}  localStyles={`${styles.rightTextWrapper} ${(States.TextActive)? styles.rightTextWrapperActive : '' }` }  >
              <Box  globalStyles={'bo'}  >
                <Image src={quotesRight} alt={'quotes'} className={styles.quotes} />
              </Box>
              <Box  globalStyles={'bo  '} localStyles={styles.rightText} >
                  We offers perfect hiring 
                  models for your project 
                  requirements
              </Box>
            </Col>
          </Col>
        </Row>
    </Col>
  );
}