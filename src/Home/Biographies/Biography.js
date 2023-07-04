import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import EmailOutline from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Biography({ show, handleClose, text }) {

  console.log("in biography", text)

  const lines = text.text.split('\n');


  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <div style={{ "display": "flex", "flexDirection": "column" }}>
            <Modal.Title style={{ "color": "#a22828" }}>{text.name}</Modal.Title>
            <span style={{ "color": "#808080" }}>{text.title}</span>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div style={{ "display": "flex", "flexDirection": "column" }}>
            <div>
              {/* {text.text} */}
              {/* <pre style={{ fontFamily: 'inherit', whiteSpace: 'pre-wrap' }}>{text.text}</pre> */}
              {lines.map((line, index) => (
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
                    href={`mailto:${text.email}`}>
                    <IconButton color='primary'>
                      <EmailOutline /> {/* icon */}
                    </IconButton>
                  </a>
                }
                label={text.email}
                labelPlacement="end"
                style={{ color: 'grey' }}
              />
              {text?.twitter != null &&
                <FormControlLabel
                  control={
                    <a target="_top"
                      rel="noopener noreferrer"
                      href={`https://twitter.com/${text.twitter}`}>
                      <IconButton color='primary'>
                        <TwitterIcon /> {/* icon */}
                      </IconButton>
                    </a>
                  }
                  style={{ color: 'grey' }}
                  label={text.twitter}
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

