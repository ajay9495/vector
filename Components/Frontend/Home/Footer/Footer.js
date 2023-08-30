
import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Footer.module.css';
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../../Assets/Images/vectorLogo.webp'

export default function Footer() {
  return (
    <Row  globalStyles={'bo rx-center'} localStyles={styles.mainWrapper}  >
      <Row  globalStyles={'bo  w-9 g-5 rx-start ry-center'}  >
        <Col  globalStyles={'bo g-3'}  >
          <Image src={logo} alt='logo' className={styles.logo} />
          <Box  globalStyles={'bo txt-grey '}  >
            Creative Agency
          </Box>
        </Col>

        <Col  globalStyles={'bo g-3 ml-5'}  >
          <Row  globalStyles={'bo w-fit txt-grey'}  >
            Connect With Social
          </Row>
          <Row  globalStyles={'bo g-3 w-fit'}  >
            <Col  globalStyles={'bo show-pointer'}  >
              <Link href={'/'} className='txt-link' >
                <FaFacebookF fontSize={'1.3rem'}/>
              </Link>   
            </Col>
            <Col  globalStyles={'bo show-pointer'}  >
              <Link href={'/'} className='txt-link' >
                <FaTwitter fontSize={'1.5rem'}/>  
              </Link>
            </Col>
            <Col  globalStyles={'bo show-pointer'}  >
              <Link href={'/'} className='txt-link' >
                <FaInstagram fontSize={'1.5rem'}/> 
              </Link>          
            </Col>

          </Row>
        </Col>


      </Row>

    </Row>
  );
}