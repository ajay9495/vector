import { motion } from "framer-motion";

import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Work.module.css';
import WorkLogic from './WorkLogic';
import Image from "next/image";
import Item from "./Item/Item";

export default function Work({Events}) {

  const {Data,workEvents} = WorkLogic();

  const variants = {
    hidden: { opacity: 0, scale: 0.75},
    visible: { opacity: 1,scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <Col globalStyles={'bo  cx-center  '} localStyles={styles.mainWrapper} >
      <Row  id={'works'} globalStyles={'bo py-5 w-9 w-10-s ry-center rx-space-between'}  >
        <Box     globalStyles={'bo  txt-l txt-bold-m'}  >
          Amazing Works
        </Box>
        <Row  globalStyles={'bo mt-5-s g-4 g-3-s'}  >
          <Box  globalStyles={'bo '} localStyles={styles.porfolioMenu} onClick={()=>{ workEvents.getAllItems() }} >
            All
          </Box>
          <Box  globalStyles={'bo '} localStyles={styles.porfolioMenu} onClick={()=>{ workEvents.filterItems('filterTwo') }} >
            Logos
          </Box>
          <Box  globalStyles={'bo '} localStyles={styles.porfolioMenu} onClick={()=>{ workEvents.filterItems('filterThree') }} >
            Graphics
          </Box>
          <Box  globalStyles={'bo '} localStyles={styles.porfolioMenu} onClick={()=>{ workEvents.filterItems('filterFour') }} >
            Branding
          </Box>
        </Row>
      </Row>
      <Box  globalStyles={'bo mt-3-s '} localStyles={styles.contentWrapper} >
        {
          Data.map((item,index)=>{
            return( 
              <Item Events={Events} key={item.id} data={item} />
            )
          })
        }
      </Box>
    </Col>

  );
}