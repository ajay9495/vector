import Row from '../../../BaseComponents/Row/Row';
import Col from '../../../BaseComponents/Col/Col';
import Box from '../../../BaseComponents/Box/Box';

import styles from './Sidebar.module.css';
import { FaHome } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SidebarLogic from './SidebarLogic';

export default function Sidebar() {

  const {SidebarState, Events} = SidebarLogic();

  return (
    <Col  globalStyles={'b '} localStyles={styles.mainWrapper} >
      <Row  globalStyles={'bo py-3 ry-center  txt-white'} localStyles={styles.headerWrapper} >
        <Box id={'headerTitle'} globalStyles={'bo  py-0 px-4 txt-l'} localStyles={(SidebarState.isOpen) ? styles.headerText : styles.headerTextHidden} >
          Admin
        </Box>
        <Box id={'headerIcon'} globalStyles={'bo py-0 px-4'} localStyles={(SidebarState.isOpen) ? styles.iconWrapper : styles.iconWrapperRotate}  onClick={Events.toggleSidebar}>
          <Col  globalStyles={'bo'}  >
            <BsChevronLeft className={styles.icon}/>
          </Col>
        </Box>
      </Row>
      <Col  globalStyles={'bo py-5'}  >
        <Row  globalStyles={'bo ry-center'} localStyles={(SidebarState.currentPage == "dashboard")? styles.menuSubActive : styles.menuSub} onClick={()=>{ Events.goTo('dashboard') }}>
          <Box  globalStyles={'bo py-2 px-4'} localStyles={styles.menuIcon} >
            <FaHome className={styles.icon}/>
          </Box>
          <Box  globalStyles={'bo  txt-m'} localStyles={(SidebarState.isOpen) ? styles.menuText : styles.menuTextHidden} >
            Dashboard
          </Box>
        </Row>
        <Row  globalStyles={'bo ry-center'} localStyles={(SidebarState.currentPage == "addProducts")? styles.menuSubActive : styles.menuSub} onClick={()=>{ Events.goTo('addProducts') }}>
          <Box  globalStyles={'bo py-2 px-4'} localStyles={styles.menuIcon} >
            <FaPlus className={styles.icon}/>
          </Box>
          <Box  globalStyles={'bo  txt-m'} localStyles={(SidebarState.isOpen) ? styles.menuText : styles.menuTextHidden} >
            Add Products
          </Box>
        </Row>
        <Row  globalStyles={'bo ry-center'} localStyles={(SidebarState.currentPage == "viewProducts")? styles.menuSubActive : styles.menuSub} onClick={()=>{ Events.goTo('viewProducts') }}>
          <Box  globalStyles={'bo py-2 px-4'} localStyles={styles.menuIcon} >
            <FaEye className={styles.icon}/>
          </Box>
          <Box  globalStyles={'bo  txt-m'} localStyles={(SidebarState.isOpen) ? styles.menuText : styles.menuTextHidden} >
            View Products
          </Box>
        </Row>
      </Col>

    </Col>
  );
}