import { useState } from 'react';

import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './EditProducts.module.css';
import Sidebar from '../SharedComponents/Sidebar/Sidebar';
import Header from '../SharedComponents/Header/Header';
import Footer from '../SharedComponents/Footer/Footer';
import EditProductsLogic from './EditProductsLogic';

import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import Spinner from 'react-bootstrap/Spinner';
import { Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function EditProducts() {

  const {ProductData, Events, ToastState, toggleToastState, closeToast, RequestStatus} = EditProductsLogic();

  return (

    <Row  globalStyles={'bo '} localStyles={styles.mainWrapper} >
      <Col  globalStyles={'b'} localStyles={styles.sidebarSection} >
        <Sidebar />
      </Col>
      <Col  globalStyles={'b c-expand'} localStyles={styles.contentSection} >
        <Header />

        <Box  globalStyles={'bo p-5'} localStyles={styles.content} >

          <Toast show={ToastState.isActive} onClose={closeToast} className={styles.toastClass} >
              <Toast.Header>
                <strong className="me-auto">Message</strong>
                <small>Now</small>
              </Toast.Header>
              <Toast.Body>{ToastState.message}</Toast.Body>
          </Toast>  

          <Col globalStyles={'bo w-fit px-5 py-5 g-4'} localStyles={styles.contentSub}>
            <Box  globalStyles={'bo txt-l w-fit mb-0 pl-3'}  >
              Add Product 
            </Box>
            <Box  globalStyles={'bo w-12'}  >
              <input name="product_name" onChange={Events.changeProductData} type="text" placeholder={ProductData.product_name.value} className={styles.inputs} />
              <Box  globalStyles={'bo '} localStyles={styles.error} >
                {ProductData.product_name.error}
              </Box>
            </Box>
            <Box  globalStyles={'bo w-12'}   >
              <select  id="category" name="category" className={styles.selectItem} onChange={Events.changeProductData}>
                  <option value="initial"  >Product Category</option>
                  <option value="saab"  >Saab</option>
                  <option value="mercedes"  >Mercedes</option>
                  <option value="audi"  >Audi</option>
              </select>
              <Box  globalStyles={'bo '} localStyles={styles.error} >
                {ProductData.category.error}
              </Box>              
            </Box>
            <Box  globalStyles={'bo w-12'}  >
              <div className='w-fit' >
                <input name="image" onChange={Events.changeProductData} type="file" id="fileInputId"/>
                <Box  globalStyles={'bo '} localStyles={styles.error} >
                  {ProductData.image.error}
                </Box>
              </div>              
            </Box>
            <Box  globalStyles={'bo w-12 '}  >
              <Row  globalStyles={'b g-2 btn-admin-primary'} onClick={Events.submitForm} >
                SUBMIT
                {(RequestStatus == "sending")&& 
                  
                    <Spinner animation="border" role="status" size="sm">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  }
              </Row>
            </Box>
          </Col>
        </Box>
        <Footer />
      </Col>
    </Row>

  );
}