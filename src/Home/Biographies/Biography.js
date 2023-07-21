import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import EmailOutline from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Biography({ show, handleClose, data, changeIrish }) {

  let lines = "";
  let title = "";

  const [bioData, setBioData] = useState({})

  useEffect(() => {
    const fn = () => {
      if (!changeIrish) {
        lines = data.text.split('\n');
        title = data.title;
        setBioData({ lines, title })
      }
      else {
        lines = data.ie_text.split('\n');
        title = data.ie_title;
        setBioData({ lines, title })
      }
    }
    fn();
  }, [])

  console.log("bio data log", bioData)

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <div style={{ "display": "flex", "flexDirection": "column" }}>
            <Modal.Title style={{ "color": "#a22828" }}>{data.name}</Modal.Title>
            <span style={{ "color": "#808080" }}>{bioData.title}</span>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div style={{ "display": "flex", "flexDirection": "column" }}>
            <div>
              {bioData.lines.map((line, index) => (
                <React.Fragment key={index}>
                  <div>{line}</div>
                  <br />
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <FormControlLabel
                control={
                  <a target="_top"
                    rel="noopener noreferrer"
                    href={`mailto:${data.email}`}>
                    <IconButton color='primary'>
                      <EmailOutline /> {/* icon */}
                    </IconButton>
                  </a>
                }
                label={data.email}
                labelPlacement="end"
                style={{ color: 'grey' }}
              />
              {data?.twitter != null &&
                <FormControlLabel
                  control={
                    <a target="_top"
                      rel="noopener noreferrer"
                      href={`https://twitter.com/${data.twitter}`}>
                      <IconButton color='primary'>
                        <TwitterIcon /> {/* icon */}
                      </IconButton>
                    </a>
                  }
                  style={{ color: 'grey' }}
                  label={data.twitter}
                  labelPlacement="end"
                />
              }
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="button btnsecondary pagescroll" style={{ "margin": "10px", "visibility": "visible" }}
            onClick={handleClose}>Close</div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

