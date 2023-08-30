import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import Box from '../../BaseComponents/Box/Box';

import styles from './Contact.module.css';
import ContactLogic from './ContactLogic';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';


export default function Contact() {

  const {Events, States, IsMessageSent} = ContactLogic();


  return (
    <Col  globalStyles={'bo '}  >
      <Header />
        <Col  globalStyles={'bo  '} localStyles={styles.mainWrapper}  >
          <Col id={'topSection'} globalStyles={'bo w-12 pt-section pb-section'}  >
            
            {
              (IsMessageSent != 'sent')?
                <Col id={'inputComponent'}  globalStyles={'bo w-12 g-5 cx-center'}   >
                  <Col id={'title'}  globalStyles={'bo w-9 cx-center txt-title'} localStyles={styles.title} >
                    Claim Your Free Trial
                  </Col>
                  <Col id={'subtitle'}  globalStyles={'bo w-9 txt-m  cx-center'} localStyles={styles.subtitle} >
                    Tell us about the project to claim your free trial
                  </Col>
                  <Col  globalStyles={'bo w-5 w-9-s'}  >
                    <Col id={'inputSection'} globalStyles={'bo w-12 py-3 g-4'}  >
                      <Col  globalStyles={'bo '}  >
                        <input name='name' placeholder='Your Name' className={styles.inputField} onChange={Events.changeFormState} />
                        <Box  globalStyles={'bo px-0 py-3'} localStyles={styles.error}  >
                          {States.FormState.name.error}
                        </Box>
                      </Col>
                      <Col  globalStyles={'bo '}  >
                        <input name='email' placeholder='Your Email ID' className={styles.inputField}  onChange={Events.changeFormState}  />
                        <Box  globalStyles={'bo px-0 py-3'} localStyles={styles.error}  >
                          {States.FormState.email.error}
                        </Box>
                      </Col>
                      <Col  globalStyles={'bo '}  >
                        <textarea name='description' placeholder='Description of the project' className={styles.inputField} onChange={Events.changeFormState} />
                        <Box  globalStyles={'bo px-0 py-3'} localStyles={styles.error}  >
                          {States.FormState.description.error}
                        </Box>
                      </Col>
                      <Col  globalStyles={'bo '}  >
                        <input name="image"  type="file" id="fileInputId"  onChange={Events.changeFormState}  />
                        <Box  globalStyles={'bo px-0 py-3'} localStyles={styles.error}  >
                          {States.FormState.image.error}
                        </Box>
                      </Col>
                      <Col  globalStyles={'bo cx-center'}  >
                        <Box  globalStyles={'bo w-12 btn-admin-primary'} onClick={Events.submitForm} >
                          {(IsMessageSent == 'sending')? "Sending..." : "Claim Now"}
                        </Box>
                      </Col> 
                    </Col>              
                  </Col>
                </Col>
              :
                <Col  id={'successComponent'}  globalStyles={'bo bo w-12 g-5 cx-center pt-section pb-section'}  >
                  <Col id={'title'}  globalStyles={'bo w-9 cx-center'} localStyles={styles.successMessage} >
                    Message Sent Successfully !
                  </Col>
                  <Col id={'subtitle'}  globalStyles={'bo w-9 txt-m  cx-center'} localStyles={styles.subtitle} >
                    Our support team will be in touch with you shortly.
                  </Col>
                  <Box  globalStyles={'bo btn-admin-primary'} onClick={Events.reloadPage} >
                    Okay
                  </Box>
                </Col>
            }
            
          </Col>

        </Col>
      <Footer />
    </Col>
  );
}