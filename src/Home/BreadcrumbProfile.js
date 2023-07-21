import { CircleNotifications } from '@mui/icons-material';
import { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';



function BreadcrumbProfile({ page }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isCopied, setIsCopied] = useState(false);
  const citation = `MACMORRIS, URL: ${window.location.href}, Accessed: Today's Date`

  async function copyTextToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard successfully.');
    } catch (err) {
      console.error('Failed to copy text to clipboard:', err);
    }
  }


  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(citation)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='bread-crumb-wrapper'>
      <Breadcrumb className='bread-crumbs'>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/search">
          Search the Database
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="button btnsecondary pagescroll citation" style={{ "margin": "10px", "visibility": "visible" }}
        onClick={() => setShow(true)}
      >Cite this data</div>

      <>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Citing this data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Data is published under a <a href="https://creativecommons.org/licenses/by-nc/4.0/" target='blank'>Creative Commons Attribution-Non Commercial 4.0 International License (CC-BY-NC 4.0).
            </a>
            To cite this data in your work, please use the following:
          </Modal.Body>
          <Modal.Footer>

            {citation}
            <div>
              <div className="button btnsecondary pagescroll citation" onClick={handleCopyClick}>
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default BreadcrumbProfile;
