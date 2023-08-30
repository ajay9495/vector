import { motion } from "framer-motion";
import Image from "next/image";

import Row from '../../../../BaseComponents/Row/Row';
import Col from '../../../../BaseComponents/Col/Col';
import Box from '../../../../BaseComponents/Box/Box';

import styles from './Item.module.css';
import ItemLogic from "./ItemLogic";

export default function Item({data,Events}) {

    const {ItemEvents} = ItemLogic(Events, data)

    const variants = {
        hidden: { opacity: 0, scale: 0.75},
        visible: { opacity: 1,scale: 1, transition: { duration: 0.3 } },
    };

  return (

        <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants}
            className={styles.subWrapper}
            onClick={ItemEvents.expandItem}
        >
            <Box  globalStyles={'bo '} localStyles={styles.imageWrapper}  >
                <Image src={data.image} className={styles.image} />
            </Box>
            <Col  globalStyles={'bo cx-center cy-center'} localStyles={styles.overlay} >
              <Col  globalStyles={'bo g-2 cx-center cy-center'} localStyles={styles.overlayInner} >
                <Box  globalStyles={'bo'} localStyles={styles.title} >
                    {data.title}
                </Box>
                <Box  globalStyles={'bo'} localStyles={styles.subtitle} >
                    {data.filter}
                </Box>
              </Col>
            </Col>
        </motion.div> 

  );
}