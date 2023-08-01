import { motion } from "framer-motion";

import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Test.module.css';
import TestLogic from './TestLogic';
import Image from "next/image";

export default function Test() {

  const {Data,Events} = TestLogic();

  const variants = {
    hidden: { opacity: 0, scale: 0.75},
    visible: { opacity: 1,scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <Col  globalStyles={'bo  cx-center '} localStyles={styles.mainWrapper} >
      <Row  globalStyles={'bo p-5 w-9 ry-center rx-space-between'}  >
        <Box  globalStyles={'bo  txt-l txt-bold-m'}  >
          My Works
        </Box>
        <Row  globalStyles={'bo  g-4'}  >
          <Box  globalStyles={'bo '} localStyles={styles.porfolioMenu} onClick={()=>{ Events.getAllItems() }} >
            All
          </Box>
          <Box  globalStyles={'bo '} localStyles={styles.porfolioMenu} onClick={()=>{ Events.filterItems('filterTwo') }} >
            Logos
          </Box>
          <Box  globalStyles={'bo '} localStyles={styles.porfolioMenu} onClick={()=>{ Events.filterItems('filterThree') }} >
            Graphics
          </Box>
          <Box  globalStyles={'bo '} localStyles={styles.porfolioMenu} onClick={()=>{ Events.filterItems('filterFour') }} >
            Branding
          </Box>
        </Row>
      </Row>
      <Box  globalStyles={'bo '} localStyles={styles.contentWrapper} >
        {
          Data.map((item,index)=>{
            return(
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                className={styles.subWrapper}
                key={item.id}
              >
                  <Box  globalStyles={'bo '} localStyles={styles.imageWrapper}  >
                    <Image src={item.image} className={styles.image} />
                  </Box>
              </motion.div>
            )
          })
        }
      </Box>
    </Col>

  );
}