import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './ServiceExpand.module.css';
import {AiOutlineClose}  from 'react-icons/ai'
import Link from 'next/link';
import ServiceExpandLogic from './ServiceExpandLogic';
import Image from 'next/image';

export default function ServiceExpand({Events,data}) {
  
    const {ServiceExpandEvents} = ServiceExpandLogic();
  
    return (
    <Col  globalStyles={'bo '} localStyles={styles.mainWrapper}  >
        <Col  globalStyles={'bo p-3  p-5-s pull-right show-pointer'} onClick={()=>{ Events.setServiceExpandState((prevState)=>{ return({...prevState, isVisible: false}) }) }} >
            <AiOutlineClose className={styles.close} />
        </Col>
        <Col  globalStyles={'bo cx-center cy-center'} localStyles={styles.innerWrapper} >

            <Col  globalStyles={'bo  g-5 cx-center'} localStyles={styles.contentWrapper} >
                <Image src={data.image} alt='expand' className={styles.image} />
            </Col>
        </Col>      
    </Col>

  );
}