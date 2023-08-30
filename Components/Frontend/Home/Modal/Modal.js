import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Modal.module.css';
import {AiOutlineClose}  from 'react-icons/ai'
import Link from 'next/link';
import ModalLogic from './ModalLogic';

export default function Modal({Events}) {
  
    const {ModalEvents} = ModalLogic();
  
    return (
    <Col  globalStyles={'bo '} localStyles={styles.mainWrapper}  >
        <Col  globalStyles={'bo cx-center cy-center'} localStyles={styles.innerWrapper} >
            <Col  globalStyles={'bo w-fit g-5 cx-center'} localStyles={styles.contentWrapper} >
                <Col  globalStyles={'bo pull-right show-pointer'} onClick={()=>{ Events.setIsModalVisible(false) }} >
                    <AiOutlineClose className={styles.close} />
                </Col>
                <Col  globalStyles={'bo cx-center '}  >
                    <Box  globalStyles={'bo'} localStyles={styles.first} >
                        TRY OUR SERVICES 
                    </Box>
                    <Box  globalStyles={'bo txt-bold-m'} localStyles={styles.second} >
                        FIRST ARTWORK
                    </Box>
                    <Box  globalStyles={'bo'} localStyles={styles.third} >
                        FREE.
                    </Box>
                </Col>
                <Box  globalStyles={'bo txt-m'}  >
                    Feel free reach out to us, to  claim your free trial
                </Box>
                <Box  globalStyles={'bo w-fit btn-admin-secondary'} onClick={()=>{ ModalEvents.goTo() }}  >
                        CLAIM NOW
                </Box>
            </Col>
        </Col>      
    </Col>

  );
}