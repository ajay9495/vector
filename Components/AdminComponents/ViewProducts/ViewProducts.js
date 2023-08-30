
import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './ViewProducts.module.css';
import Sidebar from '../SharedComponents/Sidebar/Sidebar';
import Header from '../SharedComponents/Header/Header';
import Footer from '../SharedComponents/Footer/Footer';

import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewProductsLogic from './ViewProductsLogic';


function ViewProducts({data}) {

  const {ProductData, PagesCount, CurrentPage, goTo, goToNextPage, goToPrevPage, deleteProduct, goToEditPage} = ViewProductsLogic(data);



  return (

    <Row  globalStyles={'bo '} localStyles={styles.mainWrapper} >
      <Col  globalStyles={'b'} localStyles={styles.sidebarSection} >
        <Sidebar />
      </Col>
      <Col  globalStyles={'b c-expand'} localStyles={styles.contentSection} >
        <Header />
        <Box  globalStyles={'bo p-5'} localStyles={styles.content} >
          <Col globalStyles={'bo w-8 px-5 py-5 g-4'} localStyles={styles.contentSub}>
            <Box  globalStyles={'bo txt-l'}  >
              Products List
            </Box>
            <Box id={'tableWrapper'} globalStyles={'bo '}  >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th style={{width:'10%'}}>id</th>
                    <th  style={{width:'50%'}}>Product Name</th>
                    <th  style={{width:'40%'}}>Actions</th>
                  </tr>
                </thead> 
                <tbody>
                  {
                    ProductData.data.map((item,index)=>{
                      return(
                        <tr key={item.id}>
                          <td>{`product_${item.id+12345}`}</td>
                          <td>{item.name}</td>
                          <td>
                            <Row  globalStyles={'bo w-fit g-3'}  >
                              <Box  globalStyles={'bo w-fit btn-admin-primary'} onClick={(e)=>{ goToEditPage(item) }} >
                                Edit
                              </Box>
                              <Box  globalStyles={'bo w-fit btn-admin-secondary'} onClick={(e)=>{ deleteProduct(item.id)}} >
                                Delete
                              </Box>                              
                            </Row>
                          </td>
                        </tr>  
                      )                    
                    })
                  }
                </tbody>
              </Table>
            </Box>
            <Box  globalStyles={'bo w-fit pull-right'}  >

              {(PagesCount > 0)&&

                <Pagination className='g-2'>
                  <Pagination.Prev  onClick={(e)=>{ goToPrevPage() }}  />
                    {Array.from({ length: PagesCount }).map((_, index) => {

                      return(
                        <Pagination.Item active={(CurrentPage == (index+1))?true:false} key={'viewProductPagination'+index} onClick={(e)=>{ goTo(index+1) }} >
                          {index + 1}
                        </Pagination.Item>
                      )

                    })}
                  <Pagination.Next onClick={(e)=>{ goToNextPage() }} />
                </Pagination>
              }

            </Box>
          </Col>
        </Box>
        <Footer />
      </Col>
    </Row>

  );
}






export default ViewProducts;

