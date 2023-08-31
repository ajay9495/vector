
import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';
 
import styles from './Header.module.css';
import Image from 'next/image';
import vectorLogo from '../../../../Assets/Images/vectorLogo.webp'

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import HeaderLogic from './HeaderLogic';


export default function Header() {

  const {Events} = HeaderLogic();

  return ( 

    <Row localStyles={'bo w-12 rx-center'}>
        <Row localStyles={'bo w-11 w-12-s w- py-3 py-4-s px-4-s rx-space-between'}  >
            <Image src={vectorLogo} alt={'logo'} className={styles.logo} />
            <Row  globalStyles={'bo ry-center g-5 '}  localStyles={styles.menuWrapper} >
              <Box  globalStyles={'bo show-pointer '} localStyles={styles.menuItem} onClick={()=>{ Events.goTo('/') }} >
                Home
              </Box>
              <Box  globalStyles={'bo show-pointer '} localStyles={styles.menuItem}  onClick={()=>{ Events.goTo('/#about') }}  >
                About
              </Box>
              <Box  globalStyles={'bo show-pointer '} localStyles={styles.menuItem}  onClick={()=>{ Events.goTo('/#works') }}  >
                Works
              </Box>
              <Box  globalStyles={'bo show-pointer '} localStyles={styles.menuItem}  onClick={()=>{ Events.goTo('/contact') }}  >
                Contact
              </Box>
            </Row>
            <Row  globalStyles={'bo  ry-center g-4'} localStyles={styles.socialMediaWrapper} >
              <Col  globalStyles={'bo show-pointer'}  >
               <FaFacebookF fontSize={'0.9rem'} />
              </Col>
              <Col  globalStyles={'bo show-pointer'}  >
               <FaTwitter fontSize={'1rem'} />
              </Col>
              <Col  globalStyles={'bo show-pointer'}  >
               <FaInstagram fontSize={'1rem'} />
              </Col>
            </Row>
        </Row>
    </Row>

  );
}