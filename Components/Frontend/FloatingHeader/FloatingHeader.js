import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import FloatingHeaderLogic from './FloatingHeaderLogic.js'
import styles from './FloatingHeader.module.css';
import Image from 'next/image';
import vectorLogoWhite from '../../../Assets/Images/vectorLogoWhite.webp'

import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'



export default function FloatingHeader({ScrollDirection}) {

 
  return (
    <Row  globalStyles={'bo w-12 rx-center'} localStyles={`${styles.mainWrapper} ${(ScrollDirection == 'up')? styles.bottomState : styles.topState }`} >
        <Row localStyles={'bo w-11 w-12-s w- py-3 py-4-s px-4-s rx-space-between'}  >
          <Image src={vectorLogoWhite} alt={'logo'} className={styles.logo} />
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
          <Row  globalStyles={'bo  ry-center g-4 mr-3'} localStyles={styles.socialMediaWrapper} >
            <Col  globalStyles={'bo show-pointer'}  >
              <FaFacebookF color={'#fff'} fontSize={'0.9rem'} />
            </Col>
            <Col  globalStyles={'bo show-pointer'}  >
              <FaTwitter color={'#fff'} fontSize={'1rem'} />
            </Col>
            <Col  globalStyles={'bo show-pointer'}  >
              <FaInstagram color={'#fff'} fontSize={'1rem'} />
            </Col>
          </Row>
        </Row>
    </Row>
  ); 
}
